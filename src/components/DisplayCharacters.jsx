import { useState, useEffect } from "react";
import CharactersCard from "./CharactersCard";

export default function DislayCharacters() {
    const [info, setInfo] = useState(null);
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const URL = "https://rickandmortyapi.com/api/character/?page=1";
                const request = await fetch(URL);

                if (request.status === 200) {
                    const obj = await request.json();
                    setInfo(obj["info"]);
                    setResults(obj["results"]);
                }
            } catch (err) {
                console.error(err);
                setErr("Não foi possível completar a requisição");
            } finally {
                setLoading(false);
            }
        };
        fetchApi();
    }, []);

    if (loading) {
        return <p>Carregando...</p>;
    }
    if (err) {
        return <p>{err}</p>;
    }
    return (
        <div className="flex justify-center">
            <CharactersCard results={results} />
        </div>
    );
}
