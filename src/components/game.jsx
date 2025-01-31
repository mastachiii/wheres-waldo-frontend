import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CharacterSelection from "./characterSel";
import beach from "../assets/scenes/space.jpg";
import Marker from "./marker";
import levelApi from "../helpers/levelApi";
import verifyAnswer from "../helpers/verifyAnswer";
import { showLevelCharacters } from "../helpers/transformLevelData";

export default function Game() {
    const { id } = useParams();
    const [pos, setPos] = useState({});
    const [levelData, setLevelData] = useState({});
    const [gameStatus, setGameStatus] = useState("loading");
    const [showCharSel, setShowCharSel] = useState(false);
    const [charPositions, setCharPositions] = useState({}); // { NAME: "X, Y"}

    useEffect(() => {
        (async () => {
            const level = await levelApi.getLevel(id);

            setCharPositions(showLevelCharacters({ levelData: level, mapToEmptyStrings: true }));
            setLevelData(level);
            setGameStatus("ingame");
        })();
    }, [id]);

    function handleClick(e) {
        setPos({
            x: e.pageX,
            y: e.pageY,
        });

        setShowCharSel(!showCharSel);
    }

    function handleCharacterSel({ name, pos }) {
        if (!verifyAnswer({ ans: { name, pos }, key: levelData[name] })) return;

        const updatedPos = { ...charPositions, [name]: pos };
        const isWin = Object.values(updatedPos).filter(v => v === "").length === 0;

        if (isWin) {
            location.reload();
        } else {
            setCharPositions(updatedPos);
        }
    }

    if (gameStatus === "ingame") {
        return (
            <div>
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
                <img src={beach} style={{ width: "1920px", height: "1080px" }} alt="" onClick={handleClick} />
            </div>
        );
    }
}
