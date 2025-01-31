import PropTypes, { bool, number } from "prop-types";
import { showLevelCharacters } from "../helpers/transformLevelData";

export default function CharacterSelection({ x, y, active, activeHandler, charHandler, levelData }) {
    const charsToShow = showLevelCharacters({ levelData, mapToEmptyStrings: false });

    function handleClick(e) {
        const name = e.target.textContent.toLowerCase();
        const pos = `${x}, ${y}`;

        activeHandler();
        charHandler({ name, pos });
    }

    return (
        <div style={{ display: active ? "block" : "none", position: "absolute", top: `${y}px`, left: `${x}px` }} onClick={handleClick}>
            {charsToShow.map(c => {
                return <button key={c}>{c}</button>;
            })}
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
