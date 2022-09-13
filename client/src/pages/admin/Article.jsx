import {MdDelete, MdModeEdit} from 'react-icons/md'
import Navbar from '../../components/admin/Navbar'
import FilterButton from '../../components/atoms/FilterButton'

const ArticleAdmin = () => {
    return (
        <>
            <section className="ml-[300px] w-full ">
                <Navbar children="Artikel" />
                <div className="ml-3 mt-20 flex ">
                    <table class="table-fixed border-t-[10px] basis-[80%] border-[#395B64] p-5 shadow-lg rounded-lg  border-separate border-spacing-0">
                    <thead>
                        <tr>
                            <th colSpan={5}>
                                <div className='flex justify-between  items-center '>
                                    <button className="px-3 py-2 hover:bg-[#395B64] font-medium hover:text-slate-50 hover:border-[#395B64] transition border-slate-300 my-2 border-[1px] shadow-md">Tambah Artikel</button>
                                    <div className='flex text-2xl gap-x-5'>
                                        <button className='text-[rgb(0,0,0,.5)] hover:text-black transition p-2 rounded-full shadow-md'><MdModeEdit/></button>
                                        <button className='text-[rgb(0,0,0,.5)] hover:text-black transition p-2 rounded-full shadow-md'><MdDelete/></button>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr className="text-left bg-[#A5C9CA] text-slate-50">
                            <th className="px-2 py-2 w-[400px] border border-[#A5C9CA] ">Judul</th>
                            <th className="px-2 py-2 w-[300px] border border-[#A5C9CA]">Artikel</th>
                            <th className="px-2 py-2 w-[200px] border border-[#A5C9CA]">Tanggal Publish</th>
                            <th className="px-2 py-2 h-3 overflow-x-hidden w-[200px] border border-[#A5C9CA]">Penulis</th>
                            <th className="px-2 py-2 w-[100px] border border-[#A5C9CA]">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td className="px-2 h-1 border font-semibold border-[#A5C9CA]">ade</td>
                            <td className="px-2 h-1 border border-[#A5C9CA]">Dimana Ada dimana</td>
                            <td className="px-2 h-1 border text-slate-600 border-slate-300">08 Jan 2002</td>
                            <td className="px-2 h-1 border border-[#A5C9CA]">ade Oktaasdasdasdasasdasdasdasdasdsdaasdasdasdasdsadasdasdassdviano Arrahman </td>
                            <td className="px-2 h-1 text-center border border-[#A5C9CA]">243</td>
                        </tr>
                    </tbody>
                    </table>
                    <div  className='basis-[20%] '>
                        <div className='mx-3 border-t-[10px] border-[#395B64] p-5 shadow-lg rounded-lg'>
                            <h3>Filter</h3>
                            <form className='mt-5 flex flex-wrap gap-1'>
                                <FilterButton type="checkbox" className="hover:bg-[#395B64] hover:border-[#395B64] transition p-2 border rounded-lg" text="drama" label="drama" unique="drama"/>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ArticleAdmin