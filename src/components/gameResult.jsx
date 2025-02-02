import { Link } from "react-router";

export default function Result({ timeFinished, attempts }) {
    console.log({ timeFinished, attempts });

    return (
        <dialog open={"true"}>
            <p>You Won!</p>
            <p>Your time: {timeFinished}</p>
            <ul>
                {attempts.map(a => {
                    return <p key={a.id}>{`${a.playerName} - ${a.timeFinished}`}</p>;
                })}
            </ul>
            <Link to={"/levels"}>Back to menu</Link>
        </dialog>
    );
}
