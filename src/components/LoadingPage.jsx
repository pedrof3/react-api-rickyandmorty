export default function LoadingPage() {
    return (
        <div className="flex flex-col justify-center items-center py-20">
            <div className="w-[6rem] h-[6rem] rounded-[50%] animate-spin border-5 border-gray-300 border-b-transparent bg-transparent"></div>
            <p className="text-xl font-bold">Carregando...</p>
        </div>
    );
}
