import { useEffect } from 'react'
import { createRef } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import {MdClear,MdExpandLess} from 'react-icons/md'

const CardArticle = ({setClose}) => {
  const [openDropdown,setOpenDropdown] = useState(false)
  const [category,setCategory] = useState('')
  const [data,setData] = useState([{
    id : 1,
    nama : 'ade'
},{
    id : 2,
    nama : 'diadamna'
},{
    id : 3,
    nama : 'diaasdmna'
},{
    id : 4,
    nama : 'diaasdsamna'
}
])

useEffect(() => {
console.log(data);

  return () => {
    
  }
}, [])


  function handleCategory(e){
    setCategory(e.target.innerText)
    setOpenDropdown(false)
  }

  function handleClose(){
    setOpenDropdown(false)
    setClose(false)
  }
  return (
    <>
        <div className="top-0 flex bg-opacity-20 justify-center items-center left-0 absolute bg-black w-full min-h-screen">
            <div className="border w-10/12 z-10 md:w-1/2 xl:w-1/3 relative bg-slate-50 p-3 rounded-md min-h-[400px] shadow-md">
            <span onClick={() => handleClose()} className='absolute right-3 top-3 inline-block hover:bg-[#395B64]  hover:text-white text-2xl  transition p-2 rounded-full '><MdClear/></span>
                <form action="" className="h-full mt-6">
                    <div className="flex flex-col gap-y-2 my-2">
                        <label htmlFor="judul">Judul Artikel</label>
                        <input type="text" className="bg-slate-200 p-2 rounded-md" id="judul" name="judul_article" />
                    </div>
                    <div className="flex flex-col gap-y-2 my-2">
                        <label htmlFor="article">Artikel</label>
                        <textarea className="bg-slate-200 p-2 rounded-md" type="text" id="article" name="article" />
                    </div>
                    <div className="flex flex-col gap-y-2 my-2">
                        <label htmlFor="kategori">Kategori</label>
                        <div className='w-full relative z-10 cursor-pointer '>
                            <div onClick={() => setOpenDropdown(openDropdown ? false : true)} className='w-full p-5 items-center flex justify-between bg-slate-200'>
                                {category}
                                <span className={`${openDropdown ? 'rotate-0' : 'rotate-180'} transition text-2xl`}><MdExpandLess/></span>
                            </div>
                            <ul className={'max-h-[200px] overflow-scroll absolute w-full  bg-white  z-10'}>
                            {
                                (openDropdown) ?
                                data.map((e) => {
                                return (
                                <li key={e.id} onClick={(e) => handleCategory(e)} className='p-5 hover:bg-slate-200' data-value="ink">
                                    {e.nama}
                                    <input type="text" hidden name={e.nama} value={e.id} readOnly/>
                                </li>)
                                })
                                :
                                ''
                            }
                            </ul> 
                        </div>
                    </div>
                    <button className="relative px-3 py-2 mt-8 z-0  w-full rounded-md border hover:bg-[#395B64] font-medium hover:text-slate-50 hover:border-[#395B64] transition   shadow-md">Tambah</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default CardArticle