export default function Input({ header, func }) {
    return (
        <>
            <div className="flex flex-col gap-1">
                <label className="text-amber-300 font-semibold">{header}</label>
                <input
                    type="number"
                    className="rounded-md bg-transparent border-b-2 outline-none focus:border-2 transition-all ease-in-out duration-[30ms]
                    text-white px-4 py-2 [&::-webkit-inner-spin-button]:appearance-none"
                    onChange={func}
                />
            </div>
        </>
    );
}
