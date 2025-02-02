// Convert seconds into a more hunan-friendly text

export default function convertSeconds(sec) {
    let minutes = String(Math.floor(sec / 60));
    let seconds = String(sec - minutes * 60);

    if (seconds.length === 1) seconds = "0" + seconds;

    return `${minutes}:${seconds}`;
}
