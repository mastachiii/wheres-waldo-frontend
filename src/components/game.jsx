import { useState } from "react";
import CharacterSelection from "./characterSel";
import beach from "../assets/scenes/space.jpg";
import Marker from "./marker";

export default function Game() {
    const [pos, setPos] = useState({});
    const [showCharSel, setShowCharSel] = useState(false);
    const [charPositions, setCharPositions] = useState({
        waldo: "",
        wenda: "",
        woof: "",
        odlaw: "",
        wizard: "",
    }); // Position === X, Y

    function handleClick(e) {
        console.log(e.pageX, e.pageY);
        setPos({
            x: e.pageX,
            y: e.pageY,
        });
        setShowCharSel(!showCharSel);
    }

    function handleCharacterSel({ name, pos }) {
        setCharPositions({
            ...charPositions,
            [name]: pos,
        });

        console.log(charPositions);
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
            />
            <img src={beach} style={{ width: "1920px", height: "1080px" }} alt="" onClick={handleClick} />
        </div>
    );
}
