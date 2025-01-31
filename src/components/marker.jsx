export default function Marker({ color, coordinates }) {
    const [x, y] = coordinates.split(",");

    return (
        <div
            style={{
                width: ".5rem",
                height: ".5rem",
                display: coordinates ? "block" : "none",
                backgroundColor: color,
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`,
            }}
        ></div>
    );
}
