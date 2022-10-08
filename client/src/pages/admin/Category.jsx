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
    const [edit,setEdit] = useState(false)
    const [editSelected,setEditSelected] = useState([])
    async function handleForm(e,title,id){
        e.preventDefault()
        try {
            if (edit) {
                await axios.put(`${api}/categories`,{id,title})
            }else{
                await axios.post(`${api}/categories`,{title})
            }
            getData()
            setEditSelected
            setTitle('')
            
        } catch (error) {
            console.log(error);
        }
    }

    function handleEdit(){
        setEdit(true)
    }

    async function handleFormDelete(){
        try {
            await axios.delete(`${api}/categories/`,{
               data : {data : editSelected}
            })
            getData()
        } catch (error) {
            
        }
    }

    function handleFormEdit({ _id : id = 0,title = 0}){
           const filter = editSelected.map(e => e.title).includes(title)
           if (!filter) {
               setEditSelected([...editSelected,{id,title}])
               return
            }  
            const remove = editSelected.filter(e => e.title !== title)
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
                <button onClick={handleEdit} className={`${editSelected.length > 0 ? 'text-[rgb(0,0,0,1)]' : 'text-[rgb(0,0,0,.5)]'} hover:text-black transition p-2 rounded-full shadow-md`}><MdModeEdit/></button>
                <button onClick={handleFormDelete} className={`${editSelected.length > 0 ? 'text-[rgb(0,0,0,1)]' : 'text-[rgb(0,0,0,.5)]'} text-[rgb(0,0,0,.5)] hover:text-black transition p-2 rounded-full shadow-md`}><MdDelete/></button>
            </div>
                <article className="max-h-[500px] overflow-y-scroll flex gap-1 items-start flex-wrap justify-start">
                    {
                        data.map(e => {
                            return (
                                <span key={e._id} onClick={() => handleFormEdit(e)} className={`${editSelected.map(e => e.title).includes(e.title) ? 'bg-[#395B64] border-[#395B64] text-slate-50' : 'bg-white'} cursor-pointer hover:bg-[#395B64] hover:text-slate-50 hover:border-[#395B64] transition p-2 border rounded-lg`}>{e.title}</span>
                            )
                        })
                    }
                </article>
            </div>
            <div className=" basis-1/3 ">
                {
                    (editSelected.length > 0 && edit) ?
                    editSelected.map(e => {
                        return <FormCategory key={e.id} id={e.id} category={e.title} message={message} handleForm={handleForm} text={"Ubah"}/>
                    })
                    :
                    <FormCategory titles={title} setTitle={(e) => setTitle(e.target.value)} message={message} handleForm={handleForm} text={"Tambah"}/>

                }
            </div>
                
            </div>
        </section>
    )
}

export default CategoryAdmin