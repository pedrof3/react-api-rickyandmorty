import { useState, useEffect } from "react";
import CharactersCard from "./CharactersCard";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";
import Pagination from "./Pagination";

export default function CharactersPage() {
    const [info, setInfo] = useState(null);
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(true);
    const [fail, setFail] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const URL = `https://rickandmortyapi.com/api/character/?page=${page}`;
                const request = await fetch(URL);

                if (request.status === 200) {
                    const obj = await request.json();
                    setInfo(obj["info"]);
                    setResults(obj["results"]);
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
    }, [page]);

    function changePage(page) {
        setPage(page);
        return URL;
    }

    if (loading) {
        return <LoadingPage />;
    } else if (fail) {
        return <ErrorPage fail={fail} />;
    } else if (!results) {
        return <ErrorPage fail={fail} />;
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <CharactersCard results={results} />
            <Pagination info={info} changePage={changePage} />
        </div>
    );
}
