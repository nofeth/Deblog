import {useState} from 'react'

const FormCategory = ({handleForm,category,id,message,text}) => {
  const [title,setTitle] = useState(category)
  function handleSubmit(e){
    handleForm(e,title,id)
    setTitle('')
  }  
  
  return (
    <>
    <article className="mb-5 relative border-t-[10px] h-[250px] border-[#395B64] p-5 shadow-lg rounded-lg">
                <h3 className="absolute top-2 font-semibold font-roboto">Tambah Kategori</h3>
            <form onSubmit={(e) => handleSubmit(e)} className="w-full flex flex-col justify-between h-full">
                <div className="my-4 ">
                    <label htmlFor="kategori">Nama Kategori</label>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} className={`${message ? 'ring-1 ring-red-600 border-none' : ''} my-2 w-full px-3 py-2 outline-none  focus:ring-1 focus:ring-black  border`} id="kategori" type="text" />

                    {
                        message ? 
                        <small className="text-red-600 -mt-2 block">{message}</small>
                        : ''
                    }
                </div>
                <button type="submit" className="px-3 mx-11 py-2 hover:bg-[#395B64]  font-medium rounded-lg hover:text-slate-50 hover:border-[#395B64] transition   border shadow-md">{text}</button>
            </form>
     </article>
    </>
  )
}

export default FormCategory