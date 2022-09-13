const CardCategory = () => {
    return (
        <>
        <div className="flex justify-center items-center">
            <label className="cursor-pointer border rounded-xl px-3 py-2 " htmlFor="data">Drama</label>
            <input  className="hidden" name="data" type="checkbox" />
        </div>
        </>
    )
}

export default CardCategory