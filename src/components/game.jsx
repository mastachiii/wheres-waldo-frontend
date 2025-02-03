import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import CharacterSelection from "./characterSel";
import Marker from "./marker";
import levelApi from "../helpers/levelApi";
import verifyAnswer from "../helpers/verifyAnswer";
import { sceneImages } from "../helpers/levelImages";
import { showLevelCharacters } from "../helpers/transformLevelData";
import Result from "./gameResult";
import Loading from "./loading";

export default function Game() {
    const { id } = useParams();
    const timestamp = useRef();
    const [pos, setPos] = useState({});
    const [levelData, setLevelData] = useState({});
    const [gameStatus, setGameStatus] = useState("loading");
    const [showCharSel, setShowCharSel] = useState(false);
    const [charPositions, setCharPositions] = useState({}); // { NAME: "X, Y"}

    useEffect(() => {
        (async () => {
            const { level, timeStarted } = await levelApi.getLevel(id);

            timestamp.current = timeStarted;

            setTimeout(() => {
                setLevelData(level);
                setCharPositions(showLevelCharacters({ levelData: level, mapToEmptyStrings: true }));
                setGameStatus("ingame");
            }, 1000);
        })();
    }, [id]);

    function handleClick(e) {
        setPos({
            x: e.pageX,
            y: e.pageY,
        });

        setShowCharSel(!showCharSel);
    }

    async function handleCharacterSel({ name, pos }) {
        if (!verifyAnswer({ ans: { name, pos }, key: levelData[name] })) return;

        const updatedPos = { ...charPositions, [name]: pos };
        const isWin = Object.values(updatedPos).filter(v => v === "").length === 0;

        if (isWin) {
            setGameStatus("win");
        } else {
            setCharPositions(updatedPos);
        }
    }

    switch (gameStatus) {
        case "ingame": {
            return (
                <div className="animate-popUp">
                    {Object.keys(charPositions).map(c => {
                        return <Marker name={c} coordinates={charPositions[c]} key={c} />;
                    })}
                    <CharacterSelection
                        x={pos.x}
                        y={pos.y}
                        active={showCharSel}
                        activeHandler={() => setShowCharSel(!showCharSel)}
                        charHandler={handleCharacterSel}
                        levelData={levelData}
                    />
                    <img src={sceneImages[levelData.name]} className="w-[1920px] h-[1080px]" alt="" onClick={handleClick} />
                </div>
            );
        }

        case "win": {
            return <Result timestamp={timestamp.current} id={id} />;
        }

        default: {
            return <Loading />;
        }
    }
}
