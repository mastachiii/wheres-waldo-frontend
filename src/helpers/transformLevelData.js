// Utility functions for transforming level data.. e.g Only show characters who appears in the scene..
// Rather separate the logic in a module than pollute components.

// Map each character to an empty string to be used in the game component..
function showLevelCharacters({ levelData, mapToEmptyStrings }) {
    let chars = [];

    chars = Object.keys(levelData).filter(k => k !== "name" && k !== "sceneName" && k !== "id" && k !== "attempts" && levelData[k] !== null);

    if (mapToEmptyStrings) {
        let charsMapped = {};

        chars.forEach(c => {
            charsMapped[c] = "";
        });

        return charsMapped;
    }

    return chars;
}

export { showLevelCharacters };
