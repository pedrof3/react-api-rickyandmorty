import { useState, useEffect } from "react";
import CharactersCard from "./CharactersCard";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

export default function CharactersPage() {
    // const [info, setInfo] = useState(null);
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(true);
    const [fail, setFail] = useState(null);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const URL = "https://rickandmortyapi.com/api/character";
                const request = await fetch(URL);

                if (request.status === 200) {
                    const obj = await request.json();
                    // setInfo(obj["info"]);
                    setResults(obj["results"]);
                } else {
                    setFail(request.status);
                }
            } catch (err) {
                console.error(err);
                setFail("Não foi possível completar a requisição");
            } finally {
                setLoading(false);
            }
        };
        fetchApi();
    }, []);

    if (loading) {
        return <LoadingPage />;
    } else if (fail) {
        return <p>{fail}</p>;
    } else if (!results) {
        return <ErrorPage fail={fail} />;
    }
    return (
        <div className="flex justify-center">
            <CharactersCard results={results} />
        </div>
    );
}
