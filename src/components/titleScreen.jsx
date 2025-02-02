import { useState } from "react";
import { redirect, useNavigate } from "react-router";
import logo from "../assets/logo.svg";

export default function TitleScreen() {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    function handleClick() {
        localStorage.setItem("username", username);

        navigate("/levels");
    }

    return (
        <div className="font-mono animate-popUp">
            <img src={logo} alt="wheres waldo logo" className="w-md  ml-auto mr-auto" />
            <div className="flex flex-col items-center">
                <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder={"Enter your name..."}
                    className="border-[1px] rounded-full p-3 w-[15%] border-slate-400 text-sm "
                />
                <button
                    onClick={handleClick}
                    className="mt-8 p-5 pt-3 pb-3 font-semibold rounded-full cursor-pointer text-white  bg-lime-500 transition duration-150 ease-in hover:bg-lime-600 "
                >
                    PLAY
                </button>
            </div>
        </div>
    );
}
