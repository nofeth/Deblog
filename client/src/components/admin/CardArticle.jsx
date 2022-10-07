import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import {MdClear,MdExpandLess} from 'react-icons/md'
import api from '../../api/api'

const CardArticle = ({setClose,getData,getDataCategory}) => {
  const [dropdown,setDropdown] = useState(false)
  const [category,setCategory] = useState([{title : 'Belum Ada Kategori'}])
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const [select,setSelect] = useState(false)
  const [categorySelect,setCategorySelect] = useState([])
  function handleCategory(title){
    const filter = categorySelect.filter((e) => e === title)
    if (filter.length === 1) {
      return true
    }
    setSelect(true)
    setCategorySelect([...categorySelect,title])
  }


  function handleClose(){
    setDropdown(false)
    setClose(false)
  }

  async function handleForm(e) {
    e.preventDefault()
    await axios.post(`${api}/article`,{
        title,content,view : 0,categories : categorySelect
    })
    handleClose()
    getData()
  }
  const dataCategory = async () => {
      const data = await getDataCategory()
      setCategory(data)
    }

    useEffect(() => {
    dataCategory()
    return () => {
    }
  }, [])
  

  return (
    <>
        <div className="top-0 flex bg-opacity-20 justify-center items-center left-0 absolute bg-black w-full min-h-screen">
            <div className="border w-10/12 z-10 md:w-1/2 xl:w-1/3 relative bg-slate-50 p-3 rounded-md min-h-[400px] shadow-md">
            <span onClick={() => handleClose()} className='absolute right-3 top-3 inline-block hover:bg-[#395B64]  hover:text-white text-2xl  transition p-2 rounded-full '><MdClear/></span>
                <form onSubmit={(e => handleForm(e))} className="h-full mt-6">
                    <div className="flex flex-col gap-y-2 my-2">
                        <label htmlFor="judul">Judul Artikel</label>
                        <input type="text" onChange={(e) => setTitle(e.target.value) } value={title} className="bg-slate-200 p-2 rounded-md" id="judul" name="judul_article" />
                    </div>
                    <div className="flex flex-col gap-y-2 my-2">
                        <label htmlFor="article">Artikel</label>
                        <textarea onChange={(e) => setContent(e.target.value) } value={content} className="bg-slate-200 p-2 rounded-md" type="text" id="article" name="article" />
                    </div>
                    <div className="flex flex-col gap-y-2 my-2">
                        <label htmlFor="kategori">Kategori</label>
                        <div className='w-full relative z-10 cursor-pointer '>
                            <div onClick={() => setDropdown(dropdown ? false : true)} className='w-full p-5 items-center flex justify-between bg-slate-200'>
                                <div>
                                  {
                                    (!select) ? 
                                      category[0].title
                                    :
                                    categorySelect.map(e => {
                                      return <span className='mr-1'>{e}</span>
                                    })  
                                  }
                                </div>
                                <span className={`${dropdown ? 'rotate-0' : 'rotate-180'} transition text-2xl`}><MdExpandLess/></span>
                            </div>
                            <ul className={'max-h-[200px] overflow-y-scroll absolute w-full  bg-white  z-10'}>
                            {
                                (dropdown) ?
                                category.map((e,i) => {
                                return (
                                <li key={i} onClick={() => handleCategory(e.title)} className='p-5 hover:bg-slate-200' data-value="ink">
                                    {e.title}
                                    <input type="text" hidden name={e.title} value={e.title} readOnly/>
                                </li>)
                                })
                                :
                                ''
                            }
                            </ul> 
                        </div>
                    </div>
                    <button type='submit' className="relative px-3 py-2 mt-8 z-0  w-full rounded-md border hover:bg-[#395B64] font-medium hover:text-slate-50 hover:border-[#395B64] transition   shadow-md">Tambah</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default CardArticle