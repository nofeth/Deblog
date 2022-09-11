import { IoArrowForwardSharp } from "react-icons/io5"


const Category = () => {
    let a = 10
    return (
        <section className="container font-playfair">
            <h1 className="text-center text-3xl my-10">Category</h1>
            <article className="shadow-xl rounded-xl mx-auto max-w-[1000px] overflow-scroll h-[300px]">
                <form action="" className="flex m-5 flex-wrap gap-x-1 gap-y-1  ">
                    <div className=" border rounded-xl px-3 py-2 flex justify-center items-center">
                        <label className="" htmlFor="data">Drama</label>
                        <input  className="hidden" name="data" type="checkbox" />
                    </div>
                </form>
            </article>
            <article>
            <article className="flex flex-wrap my-10">
                    <div className='basis-1/2 p-2'>
                        <div className="p-10 border font-playfair basis-1/2 ">
                            <p className="font-extrabold mb-4">7 Jan 2022</p>
                            <h1 className="text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae necessitatibus sint nulla, 
                                voluptas at aperiam suscipit modi distinctio quaerat ad 
                                aspernatur quo cumque deleniti adipisci ut, exercitationem consequuntur pariatur eveniet?
                            </h1>
                            <div className='flex items-center justify-between mt-20 flex-row'>
                                <p className=" opacity-90 ">- ade oktaviano</p>
                                <p className='mx-5 flex items-center'>Baca Selengkapnya<span className='ml-1'><IoArrowForwardSharp/></span></p>
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/2 p-2'>
                        <div className="p-10 border font-playfair basis-1/2 ">
                            <p className="font-extrabold mb-4">7 Jan 2022</p>
                            <h1 className="text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae necessitatibus sint nulla, 
                                voluptas at aperiam suscipit modi distinctio quaerat ad 
                                aspernatur quo cumque deleniti adipisci ut, exercitationem consequuntur pariatur eveniet?
                            </h1>
                            <div className='flex items-center justify-between mt-20 flex-row'>
                                <p className=" opacity-90 ">- ade oktaviano</p>
                                <p className='mx-5 flex items-center'>Baca Selengkapnya<span className='ml-1'><IoArrowForwardSharp/></span></p>
                            </div>
                        </div>
                    </div>
                </article>
            </article>
        </section>
    )
}

export default Category