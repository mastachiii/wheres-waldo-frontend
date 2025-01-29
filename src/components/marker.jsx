export default function Marker({ color, coordinates }) {
    const [x, y] = coordinates.split(",");

    return (
        <div
            style={{
                width: "1rem",
                height: "1rem",
                display: coordinates ? "block" : "none",
                backgroundColor: color,
                position: "absolute",
                left: `${x - 10}px`,
                top: `${y - 10}px`,
            }}
        ></div>
    );
}
