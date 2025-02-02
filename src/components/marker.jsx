import PropTypes from "prop-types";

const colors = {
    waldo: "#dc2626",
    wenda: "#ec4899",
    wilma: "#ec4899",
    woof: "#cbd5e1",
    odlaw: "#d97706",
    wizard: "#6b21a8",
};

export default function Marker({ name, coordinates }) {
    console.log({ name, coordinates });
    const [x, y] = coordinates.split(", ");

    return (
        <div
            style={{
                left: `${x - 5}px`,
                top: `${y - 2}px`,
                backgroundColor: colors[name],
                display: coordinates ? "block" : "none",
            }}
            className={`w-[1rem] h-[1rem] opacity-80 rounded-full absolute shadow-2xl`}
        ></div>
    );
}

Marker.propTypes = {
    name: PropTypes.string,
    coordinates: PropTypes.string,
};
