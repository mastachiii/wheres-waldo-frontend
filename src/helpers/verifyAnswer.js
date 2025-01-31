// Cross checks user's answer with the actual character location
// Answer doesn't have to be 1:1, giving some leeway (about 10px?) should be fine.

export default function verifyAnswer({ ans, key }) {
    const [ansX, ansY] = ans.pos.split(",");
    const [keyX, keyY] = key.split(",");
    const xThreshold = 10;
    const yThreshold = ans.name === "woof" ? 5 : 20; // Need more px for y threshold to account for characters height, also lower theshold for woof since it's just his tail that appears...

    // Check if answers position is in range of key position.
    const checkX = +ansX > +keyX - xThreshold && +ansX < +keyX + xThreshold;
    const checkY = +ansY > +keyY - yThreshold && +ansY < +keyY + yThreshold;

    console.log(checkX, checkY)

    return checkX && checkY;
}
