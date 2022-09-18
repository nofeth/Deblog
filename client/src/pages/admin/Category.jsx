import { useState,useEffect } from "react"
import Navbar from "../../components/admin/Navbar"
import { MdModeEdit,MdDelete } from "react-icons/md"
import api from '../../api/api'
import axios from "axios"
const CategoryAdmin = () => {
    const [title,setTitle] = useState('')
    const [data,setData] = useState([])
    const [message,setMessage] = useState('')
    console.log(message);
    async function handleForm(e){
        e.preventDefault()
        try {
            const data = await axios.post(`${api}/categories`,{title})
            getData()
            setMessage(data.data.msg)
            console.log(data.data);
            
        } catch (error) {
            console.log('halo');
        }
    }

    async function getData(){
      const {data} = await axios.get(`${api}/categories`)
      setData(data.data)
    }
    useEffect(() => {
    getData()
      return () => {
      }
    }, [])
    
    return (
        <section className="ml-[300px] w-full">
         <Navbar children="Kategori"/>
         <div className="flex min-h-[300px] mt-20 gap-x-5 mx-5">
            <div className=" border-t-[10px] basis-full border-[#395B64] p-5 shadow-lg rounded-lg">
            <div className='flex text-2xl mb-5 mx-5 justify-end items-center gap-x-5'>
                <button className='text-[rgb(0,0,0,.5)] hover:text-black transition p-2 rounded-full shadow-md'><MdModeEdit/></button>
                <button className='text-[rgb(0,0,0,.5)] hover:text-black transition p-2 rounded-full shadow-md'><MdDelete/></button>
            </div>
                <article className="max-h-[500px] overflow-y-scroll flex gap-1 items-start flex-wrap justify-start">
                    {
                        data.map(e => {
                            return (
                                <span key={e._id} className="cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg">{e.title}</span>
                            )
                        })
                    }
                </article>
            </div>
                <article className="relative border-t-[10px] h-[250px] basis-1/3  border-[#395B64] p-5 shadow-lg rounded-lg">
                    <h3 className="absolute top-2 font-semibold font-roboto">Tambah Kategori</h3>
                    <form onSubmit={handleForm} className="w-full flex flex-col justify-between h-full">
                        <div className="my-4 ">
                            <label htmlFor="kategori">Nama Kategori</label>
                            <input onChange={(e) => setTitle(e.target.value)} className={`${message ? 'ring-1 ring-red-600 border-none' : ''} my-2 w-full px-3 py-2 outline-none  focus:ring-1 focus:ring-black  border`} id="kategori" type="text" value={title}/>

                            {
                                message ? 
                                <small className="text-red-600 -mt-2 block">{message}</small>
                                : ''
                            }
                        </div>
                        <button type="submit" className="px-3 mx-11 py-2 hover:bg-[#395B64]  font-medium rounded-lg hover:text-slate-50 hover:border-[#395B64] transition   border shadow-md">Tambah</button>
                    </form>
                </article>
            </div>
        </section>
    )
}

export default CategoryAdmin