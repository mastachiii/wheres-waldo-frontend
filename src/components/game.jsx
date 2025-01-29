import { useState } from "react";
import CharacterSelection from "./characterSel";
import beach from "../assets/scenes/at-the-beach.png";

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
        setPos({
            x: e.clientX,
            y: e.clientY,
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
            <CharacterSelection
                x={pos.x}
                y={pos.y}
                active={showCharSel}
                activeHandler={() => setShowCharSel(!showCharSel)}
                charHandler={handleCharacterSel}
            />
            <img src={beach} alt="" onClick={handleClick} />
        </div>
    );
}
