import Navbar from "../../components/admin/Navbar"
import CardCategory from "../../components/atoms/CardCategory"
import FilterButton from "../../components/atoms/FilterButton"

const CategoryAdmin = () => {
    return (
        <section className="ml-[300px] w-full">
         <Navbar children="Kategori"/>
         <div className="flex h-[300px]  mt-20 gap-x-5 mx-5">
            <article className="flex  items-start flex-wrap border-t-[10px] basis-full border-[#395B64] p-5 shadow-lg rounded-lg">
                <span className="cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg">Drama</span>
                <span className="cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg">Drama</span>
                <span className="cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg">Drama</span>
                <span className="cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg">Drama</span>
                <span className="cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg">Drama</span>
                <span className="cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg">Drama</span>
                <span className="cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg">Drama</span>
                <span className="cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg">Drama</span><span className="cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg">Drama</span>
                <span className="cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg">Drama</span>
                <span className="cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg">Drama</span>
                <span className="cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg">Drama</span>
                <span className="cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg">Drama</span>
                <span className="cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg">Drama</span>
                <span className="cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg">Drama</span>
                <span className="cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg">Drama</span>
                <span className="cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg">Drama</span>
                <span className="cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg">Drama</span>
                <span className="cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg">Drama</span>
            </article>
            <artiicle className="border-t-[10px] basis-1/3 border-[#395B64] p-5 shadow-lg rounded-lg">
                <h3 className="font-semibold font-roboto">Tambah Kategori</h3>
                <form className="w-full my-2">
                    <div className="my-2">
                        <label htmlFor="">Nama Kategori</label>
                        <input className="my-2 w-full px-3 py-2 border " type="text" />
                    </div>
                    <button className="px-3 py-2 hover:bg-[#395B64] font-medium rounded-lg hover:text-slate-50 hover:border-[#395B64] transition   border shadow-md">Tambah</button>
                </form>
            </artiicle>
         </div>
        </section>
    )
}

export default CategoryAdmin