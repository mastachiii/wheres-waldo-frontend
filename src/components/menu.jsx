import { useEffect, useState } from "react";
import levelApi from "../helpers/levelApi";
import { Link } from "react-router";
import { charImages, sceneImages } from "../helpers/levelImages";
import { showLevelCharacters } from "../helpers/transformLevelData";
import Loading from "./loading";

export default function Menu() {
    const [levels, setLevels] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        (async () => {
            const { levels } = await levelApi.getAllLevels();

            setTimeout(() => {
                setLevels(levels);
            }, 1000);
        })();
    }, []);

    if (levels.length === 0) {
        return <Loading />;
    } else {
        return (
            <div>
                <h4 className=" font-mono text-3xl font-semibold text-center mt-10 hover:">Levels</h4>
                <ol className="mh-[85vh] flex w-[70%]  gap-20 justify-center ml-auto mr-auto p-10 ">
                    {levels.map(l => {
                        const charsToShow = showLevelCharacters({ levelData: l });
                        return (
                            <li
                                key={l.id}
                                onMouseEnter={() => setSelected(l.id)}
                                onMouseLeave={() => setSelected(null)}
                                className={`w-[25%] h-[40%] p-5 pb-10 rounded-lg text-[10px] shadow-lg  bg-stone-100
                                 transition duration-100 ease-in hover:bg-amber-300 hover:scale-110 *: hover:opacity-100 ${
                                     selected === l.id && "h-[50%] border-2  border-stone-600"
                                 }`}
                            >
                                <img src={sceneImages[l.name]} alt="level image" className="mb-2" />
                                <Link to={`/levels/${l.id}`} className={`font-mono italic hover:text-blue-700 ${selected === l.id && "text-[15px]"}`}>
                                    {l.sceneName}
                                </Link>
                                <div className={selected === l.id ? "block font-mono mt-2 " : "hidden"}>
                                    <p className="mb-2">Characters to find:</p>
                                    <div className="flex gap-2 flex-wrap">
                                        {charsToShow.map(c => {
                                            return <img src={charImages[c]} key={c} className="w-[15%] rounded-full" />;
                                        })}
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        );
    }
}
