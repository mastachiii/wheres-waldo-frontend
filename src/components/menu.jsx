import { useEffect, useState } from "react";
import levelApi from "../helpers/levelApi";
import { Link } from "react-router";

export default function Menu() {
    const [levels, setLevels] = useState([]);

    useEffect(() => {
        (async () => {
            const { levels } = await levelApi.getAllLevels();

            setLevels(levels);
        })();
    });

    return (
        <div>
            <h4>Where's Waldo?</h4>
            
            <ol>
                {levels.map(l => {
                    return (
                        <li key={l.id}>
                            <Link to={`/levels/${l.id}`}>{l.sceneName}</Link>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
