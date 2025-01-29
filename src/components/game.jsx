import { useState } from "react";
import CharacterSelection from "./characterSel";
import beach from "../assets/scenes/at-the-beach.png";

export default function Game() {
    const [pos, setPos] = useState({});
    const [showCharSel, setShowCharSel] = useState(false);
    const [charLocations, setCharLocations] = useState({
        waldo: "",
        wenda: "",
        odlaw: "",
        woof: "",
    });

    function handleClick(e) {
        setPos({
            x: e.clientX,
            y: e.clientY,
        });

        setShowCharSel(!showCharSel)
    }

    return (
        <div>
            <CharacterSelection x={pos.x} y={pos.y} active={showCharSel} activeHandler={() => setShowCharSel(!showCharSel)}/>
            <img src={beach} alt="" onClick={handleClick} />
        </div>
    );
}
