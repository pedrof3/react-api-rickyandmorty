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
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const URL = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;
                const request = await fetch(URL);

                if (request.status === 200) {
                    const obj = await request.json();
                    setInfo(obj["info"]);
                    setResults(obj["results"]);
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
    }, [currentPage]);

    function changePage(page) {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
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
            <Pagination
                info={info}
                currentPage={currentPage}
                changePage={changePage}
            />
        </div>
    );
}
