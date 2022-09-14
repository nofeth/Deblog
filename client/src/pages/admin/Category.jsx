import Navbar from "../../components/admin/Navbar"
import CardCategory from "../../components/atoms/CardCategory"
import FilterButton from "../../components/atoms/FilterButton"
import { MdModeEdit,MdDelete } from "react-icons/md"

const CategoryAdmin = () => {
    return (
        <section className="ml-[300px] w-full">
         <Navbar children="Kategori"/>
         <div className="flex min-h-[300px] mt-20 gap-x-5 mx-5">
            <div className=" border-t-[10px] basis-full border-[#395B64] p-5 shadow-lg rounded-lg">
            <div className='flex text-2xl mb-5 mx-5 justify-end items-center gap-x-5'>
                <button className='text-[rgb(0,0,0,.5)] hover:text-black transition p-2 rounded-full shadow-md'><MdModeEdit/></button>
                <button className='text-[rgb(0,0,0,.5)] hover:text-black transition p-2 rounded-full shadow-md'><MdDelete/></button>
            </div>
                <article className="flex items-start flex-wrap justify-start">
                    <span className="cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg">Drama</span>
                </article>
            </div>
                <article className="relative border-t-[10px] h-[200px] basis-1/3  border-[#395B64] p-5 shadow-lg rounded-lg">
                    <h3 className="absolute top-2 font-semibold font-roboto">Tambah Kategori</h3>
                    <form className="w-full flex flex-col justify-between h-full">
                        <div className="my-4 ">
                            <label htmlFor="kategori">Nama Kategori</label>
                            <input className="my-2 w-full px-3 py-2 border" id="kategori" type="text" />
                        </div>
                        <button className="px-3 mx-11 py-2 hover:bg-[#395B64]  font-medium rounded-lg hover:text-slate-50 hover:border-[#395B64] transition   border shadow-md">Tambah</button>
                    </form>
                </article>
            </div>
        </section>
    )
}

export default CategoryAdmin