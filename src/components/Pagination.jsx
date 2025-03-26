import { ChevronsLeft, ChevronsRight } from "lucide-react";

export default function Pagination({ info, changePage }) {
    const pages = Array.from({ length: info.pages }, (_, x) => x + 1);
    return (
        <div className="my-8">
            <ul className="flex flex-row gap-0.5 rounded-md border-2 border-gray-400 bg-gray-400">
                <li className="cursor-pointer px-2 rounded-l-md bg-white hover:bg-cyan-600 hover:text-white hover:font-bold">
                    <ChevronsLeft />
                </li>
                {pages.map((page) => (
                    <li
                        key={page}
                        className="cursor-pointer px-2 bg-white hover:bg-cyan-600 hover:text-white hover:font-bold"
                        onClick={() => changePage(page)}
                    >
                        {page}
                    </li>
                ))}
                <li className="cursor-pointer px-2 rounded-r-md bg-white hover:bg-cyan-600 hover:text-white hover:font-bold">
                    <ChevronsRight />
                </li>
            </ul>
        </div>
    );
}
