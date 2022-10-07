import { useState,useEffect } from 'react'
import {MdDelete, MdModeEdit} from 'react-icons/md'
import CardArticle from '../../components/admin/CardArticle'
import Navbar from '../../components/admin/Navbar'
import FilterButton from '../../components/atoms/FilterButton'
import axios from 'axios'
import api from '../../api/api'
 const ArticleAdmin = () => {
    const [data,setData] = useState([])
    const [close,setClose] = useState(false) 
    const [category,setCategory] = useState([])
    async function getData() {
        const {data : {data}} =  await axios.get(`${api}/article`)
        setData(JSON.parse(data))
    }

    async function getDataCategory(){
        const {data : {data}} = await axios.get(`${api}/categories`)
        return JSON.parse(data);
    }
    
    async function getCategory() {
        const data = await getDataCategory()
        setCategory(data)
    }

    useEffect(() => {
        getData()
        getCategory()
    }, [])
    
    
    return (
        <>
        {
            close ? 
            <CardArticle setClose={(e) => setClose(e)} getData={getData} getDataCategory={getDataCategory}/>
            :
            ''
        }
            <section className=" ml-[300px] w-full ">
                <Navbar children="Artikel" />
                <div className="ml-3 mt-20 flex ">
                    <table className="table-fixed border-t-[10px] basis-[80%] border-[#395B64] p-5 shadow-lg rounded-lg  border-separate border-spacing-0">
                    <thead>
                        <tr>
                            <th colSpan={5}>
                                <div className='flex justify-between items-start my-2'>
                                    <button onClick={() => setClose(true)} className="px-3 py-2 hover:bg-[#395B64] font-medium hover:text-slate-50 hover:border-[#395B64] transition   border shadow-md">Tambah Artikel</button>
                                    <div className='flex text-2xl gap-x-5'>
                                        <button className='text-[rgb(0,0,0,.5)] hover:text-black transition p-2 rounded-full shadow-md'><MdModeEdit/></button>
                                        <button className='text-[rgb(0,0,0,.5)] hover:text-black transition p-2 rounded-full shadow-md'><MdDelete/></button>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr className="text-left bg-[#395B64] text-slate-50">
                            <th className="px-2 py-2 border border-[#395B64] ">Judul</th>
                            <th className="px-2 py-2 border border-[#395B64]">Artikel</th>
                            <th className="px-2 py-2 border border-[#395B64]">Tanggal Publish</th>
                            <th className="px-2 py-2 border border-[#395B64]">Penulis</th>
                            <th className="px-2 py-2 border border-[#395B64]">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(e => {
                                return (
                                <tr key={e._id} className="border w-[300px]">
                                    <td className="px-2 border font-semibold border-[#395B64]">{e.title}</td>
                                    <td className="px-2 border border-[#395B64]">{e.content}</td>
                                    <td className="px-2 border border-[#395B64]">08 Jan 2002</td>
                                    <td className="px-2 overflow-hidden border border-[#395B64]">{e.author || '-'}</td>
                                    <td className="px-2 text-center border border-[#395B64]">243</td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                    </table>
                    <div  className='basis-[20%] '>
                        <div className='mx-3 border-t-[10px] border-[#395B64] p-5 shadow-lg rounded-lg'>
                            <h3 className='font-semibold font-roboto'>Filter</h3>
                            <form className='mt-5 flex flex-wrap gap-1'>
                                {
                                    category.map((e) => {
                                       return  <FilterButton key={e._id} type="checkbox" className="cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg" text={e.title} label={e.title} unique={e.title}/>
                                    })
                                }
                            </form>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default ArticleAdmin