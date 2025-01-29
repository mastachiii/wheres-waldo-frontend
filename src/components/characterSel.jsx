import { useState } from "react";

export default function CharacterSelection({ x, y, active, activeHandler }) {
    return (
        <div style={{ display: active ? "block" : "none", position: "absolute", top: `${y}px`, left: `${x}px` }} onClick={activeHandler}>
            <button>Waldo</button>
            <button>Wenda</button>
            <button>Odlaw</button>
            <button>Woof</button>
        </div>
    );
}
