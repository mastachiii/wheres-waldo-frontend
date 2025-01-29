export default function CharacterSelection({ x, y, active, activeHandler, charHandler }) {
    function handleClick(e) {
        const name = e.target.textContent.toLowerCase();
        const pos = `${e.clientX}, ${e.clientY}`;

        activeHandler();
        charHandler({ name, pos });
    }

    return (
        <div style={{ display: active ? "block" : "none", position: "absolute", top: `${y}px`, left: `${x}px` }} onClick={handleClick}>
            <button>Waldo</button>
            <button>Wenda</button>
            <button>Odlaw</button>
            <button>Woof</button>
        </div>
    );
}
