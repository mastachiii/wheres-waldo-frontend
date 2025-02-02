import PropTypes, { bool, number } from "prop-types";
import { showLevelCharacters } from "../helpers/transformLevelData";
import { charImages } from "../helpers/levelImages";
import { useState } from "react";

export default function CharacterSelection({ x, y, active, activeHandler, charHandler, levelData }) {
    const charsToShow = showLevelCharacters({ levelData, mapToEmptyStrings: false });
    const [selected, setSelected] = useState(0);

    function handleClick(name) {
        const pos = `${x}, ${y}`;

        activeHandler();
        charHandler({ name, pos });
    }

    function handleCylce(method) {
        const current = method === "add" ? selected + 1 : selected - 1;

        if (current < 0 || current > charsToShow.length + 1) return;

        setSelected(current);
    }

    return (
        <div
            style={{ display: active ? "flex" : "none", position: "absolute", top: `${y}px`, left: `${x - 20}px` }}
            onClick={() => activeHandler()}
            className="flex-col justify-center p-3 overflow-hidden"
        >
            <button onClick={() => handleCylce("sub")}>prev</button>
            {charsToShow.map((c, index) => {
                return (
                    <button key={c} onClick={() => handleClick(c)} value={c} style={{ display: selected === index ? "block" : "none" }}>
                        <img
                            src={charImages[c]}
                            className="w-[3rem] h-[3rem] rounded-full transition duration-75 ease-in cursor-pointer hover:scale-120"
                        />
                    </button>
                );
            })}
            <button onClick={() => handleCylce("add")}>next</button>
        </div>
    );
}

CharacterSelection.propTypes = {
    x: PropTypes.oneOfType([bool, number]),
    y: PropTypes.oneOfType([bool, number]),
    active: PropTypes.bool,
    activeHandler: PropTypes.func,
    charHandler: PropTypes.func,
    levelData: PropTypes.object,
};
