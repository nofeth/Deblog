const Navbar = ({children}) => {
    return (
        <>
        <div className="p-5 text-slate-50 font-semibold text-2xl font-roboto bg-[#395B64]">
            <h1>{children}</h1>
        </div>
        </>
    )
}

export default Navbar