import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import CharacterSelection from "./characterSel";
import beach from "../assets/scenes/space.jpg";
import Marker from "./marker";
import levelApi from "../helpers/levelApi";
import verifyAnswer from "../helpers/verifyAnswer";

export default function Game() {
    const { id } = useParams();
    const [pos, setPos] = useState({});
    const [levelData, setLevelData] = useState({});
    const [showCharSel, setShowCharSel] = useState(false);
    const [charPositions, setCharPositions] = useState({
        waldo: "",
        wenda: "",
        woof: "",
        odlaw: "",
        wizard: "",
    }); // Position === X, Y

    useEffect(() => {
        (async () => {
            const level = await levelApi.getLevel(id);

            setLevelData(level);
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

        setCharPositions({
            ...charPositions,
            [name]: pos,
        });
    }

    return (
        <div>
            <Marker color="red" coordinates={charPositions.waldo} />
            <Marker color="pink" coordinates={charPositions.wenda} />
            <Marker color="white" coordinates={charPositions.woof} />
            <Marker color="yellow" coordinates={charPositions.odlaw} />
            <Marker color="purple" coordinates={charPositions.wizard} />
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
