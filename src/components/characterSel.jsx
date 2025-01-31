export default function CharacterSelection({ x, y, active, activeHandler, charHandler, levelData }) {
    const charsToShow = Object.keys(levelData).filter(
        k => k !== "name" && k !== "sceneName" && k !== "id" && k !== "attempts" && levelData[k] !== null
    ); // Theres probably a better way..

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
