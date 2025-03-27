import { ChevronsLeft, ChevronsRight } from "lucide-react";

export default function Pagination({ info, currentPage, changePage }) {
    const setPages = (currentPage) => {
        if (currentPage <= 4) {
            return Array.from({ length: 7 }, (_, x) => x + 1);
        } else if (currentPage >= 39) {
            return Array.from({ length: 7 }, (_, x) => x + info.pages - 6);
        } else {
            return Array.from({ length: 7 }, (_, x) => x + currentPage - 3);
        }
    };
    return (
        <div className="my-8">
            <ul className="flex flex-row gap-0.5 rounded-md border-2 border-gray-400 bg-gray-400">
                <li
                    className="cursor-pointer px-2 rounded-l-md bg-white hover:bg-cyan-200 hover:font-bold"
                    onClick={() =>
                        currentPage != 1 ? changePage(currentPage - 1) : null
                    }
                >
                    <ChevronsLeft />
                </li>
                {setPages(currentPage).map((page) => (
                    <li
                        key={page}
                        className="cursor-pointer w-6 bg-white hover:bg-cyan-200 hover:font-bold"
                        onClick={() => changePage(page)}
                    >
                        <div
                            className={`flex justify-center ${
                                page === currentPage &&
                                "w-[100%] h-[100%] font-bold bg-cyan-500 text-white"
                            }`}
                        >
                            {page}
                        </div>
                    </li>
                ))}
                <li
                    className="cursor-pointer px-2 rounded-r-md bg-white hover:bg-cyan-200 hover:font-bold"
                    onClick={() =>
                        currentPage != info.pages
                            ? changePage(currentPage + 1)
                            : null
                    }
                >
                    <ChevronsRight />
                </li>
            </ul>
        </div>
    );
}
