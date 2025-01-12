export default function Input({ header, func }) {
    return (
        <>
            <div className="flex flex-col gap-1">
                <label className="text-amber-300 ml-1 font-semibold">{header}</label>
                <input
                    type="number"
                    className="rounded-md bg-transparent border-b-2 outline-none  focus:bg-slate-800 transition-all ease-in-out
                    text-white text-lg font-semibold p-1 h-[5vh] [&::-webkit-inner-spin-button]:appearance-none"
                    onChange={func}
                />
            </div>
        </>
    );
}
