import PropTypes, { bool, number } from "prop-types";
import { showLevelCharacters } from "../helpers/transformLevelData";
import { charImages } from "../helpers/levelImages";

export default function CharacterSelection({ x, y, active, activeHandler, charHandler, levelData }) {
    const charsToShow = showLevelCharacters({ levelData, mapToEmptyStrings: false });

    function handleClick(e) {
        const name = e.target.textContent.toLowerCase();
        const pos = `${x}, ${y}`;

        activeHandler();
        charHandler({ name, pos });
    }

    return (
        <div
            style={{ display: active ? "flex" : "none", position: "absolute", top: `${y}px`, left: `${x - 20}px` }}
            onClick={handleClick}
            className=" flex-col justify-center p-3 overflow-hidden"
        >
            {charsToShow.map(c => {
                return (
                    <button key={c}>
                        <img
                            src={charImages[c]}
                            className="w-[3rem] h-[3rem] rounded-full transition duration-75 ease-in cursor-pointer hover:scale-120"
                        />
                    </button>
                );
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
