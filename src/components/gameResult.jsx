import { Link } from "react-router";
import convertSeconds from "../helpers/convertSeconds";
import levelApi from "../helpers/levelApi";
import { useEffect, useState } from "react";
import Loading from "./loading";
import PropTypes from "prop-types";

export default function Result({ timestamp, id }) {
    const [attemptTime, setAttemptTime] = useState("");
    const [levelData, setLevelData] = useState(null);

    useEffect(() => {
        (async () => {
            const name = localStorage.getItem("username") || "Anonymous";

            const { timeFinished } = await levelApi.submitLevelAttempt({ id, name, timeStarted: timestamp });
            const { level } = await levelApi.getLevel(id); // Fetch level data again incase the leaderboards have changed..

            setAttemptTime(timeFinished);
            setLevelData(level);
        })();
    }, [id, timestamp]);

    if (levelData) {
        return (
            <div className="w-[30%] flex flex-col justify-center text-center ml-auto mr-auto translate-y-50 font-mono animate-popUp">
                <h4 className="text-5xl mb-7">You Won!</h4>
                <p>Your time: {convertSeconds(attemptTime)}</p>
                <p className="text-sm text-start mt-10">Leaderboards: </p>
                <ul className="grid grid-cols-2 justify-center">
                    {levelData.attempts.map((a, index) => {
                        return (
                            <span key={a.id} className="flex mt-3 ml-5">
                                <p className="text-sm mt-1 mr-2">{index + 1}.</p>
                                <p className="">{` ${a.playerName} - ${convertSeconds(a.timeFinished)}`}</p>
                            </span>
                        );
                    })}
                </ul>
                <Link to={"/levels"} className="mt-30 underline hover:text-amber-300">
                    Back to menu
                </Link>
            </div>
        );
    } else {
        return <Loading />;
    }
}

Result.propTypes = {
    timestamp: PropTypes.number,
    id: PropTypes.string,
};
