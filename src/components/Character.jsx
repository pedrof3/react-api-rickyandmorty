import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

export default function Character() {
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(true);
    const [fail, setFail] = useState(null);
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const URL = `https://rickandmortyapi.com/api/character/${id}`;
                const request = await fetch(URL);

                if (request.status === 200) {
                    const obj = await request.json();
                    setResults(obj);
                    console.log(obj);
                } else {
                    setFail(request.status);
                }
            } catch (erro) {
                console.error(erro);
                setFail("Não foi possível completar a requisição");
            } finally {
                setLoading(false);
            }
        };
        fetchApi();
    }, [id]);

    if (loading) {
        return <LoadingPage />;
    } else if (fail) {
        return <ErrorPage fail={fail} />;
    } else if (!results) {
        return <ErrorPage fail={fail} />;
    }

    return (
        <div
            // key={}
            className="w-screen h-screen flex justify-center items-center"
        >
            <div className="w-[35%] h-[90%] flex flex-col p-4 text-center rounded-xl shadow-2xs border-3 border-lime-400 shadow-gray-400 bg-cyan-500">
                <p className="text-xl font-extrabold uppercase text-black">
                    {results.name}
                </p>
                <ul className="flex flex-col ">
                    <li>
                        Status: {results.status ? results.status : "unknown"}
                    </li>
                    <li>
                        Specie: {results.specie ? results.specie : "unknown"}
                    </li>
                    <li>Type: {results.type ? results.type : "unknown"}</li>
                    <li>
                        Gender: {results.gender ? results.gender : "unknown"}
                    </li>
                </ul>
                <img
                    src={results.image}
                    alt=""
                    className="w-[25rem] h-[25rem] self-center rounded-xl"
                />
            </div>
        </div>
    );
}
