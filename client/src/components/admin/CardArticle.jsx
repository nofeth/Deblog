const CardArticle = () => {

  return (
    <>
        <div className="border  absolute  top-0 bottom-0 left-[300px] right-0">
            <div className="flex justify-center h-full items-center bg-black  bg-opacity-10">
                <form action="" className="flex backdrop-blur-md bg-opacity-10 flex-col bg-white  w-[500px] h-[500px] border p-5 rounded-md">
                    <div className="flex flex-col">
                        <label htmlFor="judul">Judul Artikel</label>
                        <input type="text" id="judul" name="judul_article" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="article">Artikel</label>
                        <textarea type="text" id="article" name="article" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="kategori">Kategori</label>
                        <input type="text" id="kategori" name="judul_article" />
                    </div>
                    <button className="mt-5" type="submit">Tambah Artikel</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default CardArticle