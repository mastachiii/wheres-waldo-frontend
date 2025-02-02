import { useState } from "react";
import { redirect } from "react-router";

export default function TitleScreen() {
    const [username, setUsername] = useState("");

    function handleClick() {
        localStorage.setItem("username", username);

        redirect("/levels");
    }

    return (
        <div>
            <h1>Where's Waldo</h1>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            <button onClick={handleClick}>PLAY</button>
        </div>
    );
}
