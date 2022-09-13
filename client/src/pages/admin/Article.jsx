import {MdDelete, MdModeEdit} from 'react-icons/md'

const ArticleAdmin = () => {
    return (
        <>
            <section className="ml-[300px] w-full ">
                <div className="p-5 text-slate-50 font-semibold text-2xl font-roboto bg-[#395B64]">
                    <h1>Artikel</h1>
                </div>
                <div className="ml-2 mt-20">
                    <table class="table-fixed border-t-[10px] border-[#395B64] p-5 shadow-lg rounded-lg  border-separate border-spacing-0">
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
                </div>
            </section>
        </>
    )
}

export default ArticleAdmin