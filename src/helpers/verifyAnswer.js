// Cross checks user's answer with the actual character location
// Answer doesn't have to be 1:1, giving some leeway (about 10px?) should be fine.

export default function verifyAnswer({ ans, key }) {
    const ansPos = ans.pos.split(",");
    const keyPos = key.split(",");
    // Check if answers position is in range of key position.
    console.log(+ansPos[0] - 10, +ansPos[0] + 10);
    return ansPos;
}
