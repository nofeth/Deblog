import { useState,useEffect } from "react"
import Navbar from "../../components/admin/Navbar"
import { MdModeEdit,MdDelete } from "react-icons/md"
import api from '../../api/api'
import axios from "axios"
import FormCategory from "../../components/admin/FormCategory"
const CategoryAdmin = () => {
    const [title,setTitle] = useState('')
    const [data,setData] = useState([])
    const [message,setMessage] = useState('')
    const [editSelected,setEditSelected] = useState([])
    async function handleForm(e){
        e.preventDefault()
        try {
            const data = await axios.post(`${api}/categories`,{title})
            getData()
            setTitle('')
            
        } catch (error) {
            console.log("error");
        }
    }

    function handleFormEdit(element){
        
       const filter = editSelected.includes(element) // false
       if (!filter) {
           setEditSelected([...editSelected,element])
           return
        }
        const remove = editSelected.filter(e => e !== element)
        setEditSelected(remove)
        return 
   }
    async function getData(){
        try {
            const {data : {data}} = await axios.get(`${api}/categories`)
            setData(JSON.parse(data))
        } catch (error) {
            console.log(error.message);
        }
        }
    useEffect(() => {
    getData()
      return () => {
        getData()
    }
    }, [])
    
    return (
        <section className="ml-[300px] w-full">
         <Navbar children="Kategori"/>
         <div className="flex min-h-[300px] mt-20 gap-x-5 mx-5">
            <div className=" border-t-[10px] basis-full border-[#395B64] p-5 shadow-lg rounded-lg">
            <div className='flex text-2xl mb-5 mx-5 justify-end items-center gap-x-5'>
                <button className={`${editSelected.length > 0 ? 'text-[rgb(0,0,0,1)]' : 'text-[rgb(0,0,0,.5)]'} hover:text-black transition p-2 rounded-full shadow-md`}><MdModeEdit/></button>
                <button onClick={handleFormEdit} className={`${editSelected.length > 0 ? 'text-[rgb(0,0,0,1)]' : 'text-[rgb(0,0,0,.5)]'} text-[rgb(0,0,0,.5)] hover:text-black transition p-2 rounded-full shadow-md`}><MdDelete/></button>
            </div>
                <article className="max-h-[500px] overflow-y-scroll flex gap-1 items-start flex-wrap justify-start">
                    {
                        data.map(e => {
                            return (
                                <span key={e._id} onClick={() => handleFormEdit(e.title)} className={`${editSelected.includes(e.title) ? 'bg-[#395B64] border-[#395B64] text-slate-50' : 'bg-white'} cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg`}>{e.title}</span>
                            )
                        })
                    }
                </article>
            </div>
            <div className=" basis-1/3 ">
                {
                    <FormCategory title={title} setTitle={(e) => setTitle(e.target.value)} message={message} handleForm={handleForm}/>
                }
            </div>
                
            </div>
        </section>
    )
}

export default CategoryAdmin