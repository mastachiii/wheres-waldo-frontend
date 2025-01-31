import PropTypes from "prop-types";

const colors = {
    waldo: "red",
    wenda: "pink",
    wilma: "pink",
    woof: "white",
    odlaw: "yellow",
    wizard: "purple",
};

export default function Marker({ name, coordinates }) {
    const [x, y] = coordinates.split(",");

    return (
        <div
            style={{
                width: ".5rem",
                height: ".5rem",
                display: coordinates ? "block" : "none",
                backgroundColor: colors[name],
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`,
            }}
        ></div>
    );
}

Marker.propTypes = {
    name: PropTypes.string,
    coordinates: PropTypes.string,
};
