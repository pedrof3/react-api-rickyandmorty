export default function CharactersCard({ results }) {
    return (
        <div className="w-[90%] grid grid-cols-3 gap-6">
            {results.map((char) => (
                <div
                    key={char.id}
                    className="flex flex-col p-4 text-center rounded-xl shadow-2xs border-3 border-lime-400 shadow-gray-400 bg-cyan-500"
                >
                    <p className="text-xl font-extrabold uppercase text-black">
                        {char.name}
                    </p>
                    <ul className="grid grid-cols-2">
                        <li>Status: {char.status ? char.status : "unknown"}</li>
                        <li>Specie: {char.specie ? char.specie : "unknown"}</li>
                        <li>Type: {char.type ? char.type : "unknown"}</li>
                        <li>Gender: {char.gender ? char.gender : "unknown"}</li>
                    </ul>
                    <img
                        src={char.image}
                        alt=""
                        className="w-[25rem] h-[25rem] self-center rounded-xl"
                    />
                </div>
            ))}
        </div>
    );
}
