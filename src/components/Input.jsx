export default function Input({ header }) {
    return (
        <>
            <div className="flex flex-col gap-1">
                <label className="text-white font-semibold">Teste</label>
                <input
                    type="number"
                    className="rounded-md bg-transparent border-2 text-white px-4 py-2"
                />
            </div>
        </>
    );
}
