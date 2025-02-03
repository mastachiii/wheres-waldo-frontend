import { Link } from "react-router";
import convertSeconds from "../helpers/convertSeconds";

export default function Result({ timeFinished, attempts }) {
    return (
        <div className="w-[30%] flex flex-col justify-center text-center ml-auto mr-auto translate-y-50 font-mono animate-popUp">
            <h4 className="text-5xl mb-7">You Won!</h4>
            <p>Your time: {convertSeconds(timeFinished)}</p>
            <p className="text-sm text-start mt-10">Leaderboards: </p>
            <ul className="flex">
                {attempts.map((a, index) => {
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
}
