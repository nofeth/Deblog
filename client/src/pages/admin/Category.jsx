import Navbar from "../../components/admin/Navbar"

const CategoryAdmin = () => {
    return (
        <section className="ml-[300px] w-full">
         <Navbar children="Kategori"/>
         <div className="flex mt-20 gap-x-5 mx-5">
            <article className="border-t-[10px] basis-full border-[#395B64] p-5 shadow-lg rounded-lg">
                <h3>Kategory</h3>
            </article>
            <artiicle className="border-t-[10px] basis-1/3 border-[#395B64] p-5 shadow-lg rounded-lg">
                <h3>Tambah Kategori</h3>
                <form className="w-full">
                    <div className="border">
                        <label htmlFor="">Nama Kategori</label>
                        <input className="w-full px-3 py-2 border " type="text" />
                    </div>
                    <button className="px-3 py-2 hover:bg-[#395B64] font-medium rounded-lg hover:text-slate-50 hover:border-[#395B64] transition   border shadow-md">Tambah</button>
                </form>
            </artiicle>
         </div>
        </section>
    )
}

export default CategoryAdmin