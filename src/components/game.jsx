import { useState } from "react";
import beach from "../assets/scenes/at-the-beach.png";

export default function Game() {
    const [pos, setPos] = useState({});
    function handleClick(e) {
        setPos({
            x: e.clientX,
            y: e.clientY,
        });
    }

    return (
        <div>
            <div style={{ width: "2rem", height: "2rem",backgroundColor: "rebeccapurple", position: "absolute", left: `${pos.x}px`, top: `${pos.y}px`, zIndex: 1 }}></div>
            <img src={beach} alt="" onClick={handleClick} />
        </div>
    );
}
