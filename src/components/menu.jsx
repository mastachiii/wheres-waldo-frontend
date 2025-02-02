import { useEffect, useState } from "react";
import levelApi from "../helpers/levelApi";
import { Link } from "react-router";
import images from "../helpers/levelImages";

export default function Menu() {
    const [levels, setLevels] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        (async () => {
            const { levels } = await levelApi.getAllLevels();

            setLevels(levels);
        })();
    }, []);

    return (
        <div>
            {console.log(levels)}
            <h4 className="font-mono text-3xl font-semibold text-center mt-10 hover:">Levels</h4>
            <ol className="flex w-[70%] gap-20 justify-center ml-auto mr-auto p-10 ">
                {levels.map(l => {
                    return (
                        <li
                            key={l.id}
                            onMouseEnter={() => setSelected(l.id)}
                            onMouseLeave={() => setSelected(null)}
                            className="w-[25%] p-5 pb-10 rounded-lg text-[10px] shadow-lg  bg-stone-100 transition duration-100 ease-in hover:bg-amber-300 hover:scale-110 *: hover:opacity-100"
                        >
                            <img src={images[l.name]} alt="level image" className="mb-2" />
                            <Link to={`/levels/${l.id}`} className=" font-mono italic hover:text-blue-700">
                                {l.sceneName}
                            </Link>
                            <div className={selected === l.id ? "opacity-100" : "opacity-0"}>
                                <p>dwkapdw</p>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
