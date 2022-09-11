import {IoArrowForwardSharp} from 'react-icons/io5'

const Home = () => {
    return (
        <>
        <section className="container">
            <div className="mx-auto blur-sm relative  bottom-10  w-full h-[400px] bg-slate-100"></div>
            <div className="mx-5 relative bottom-72">
                <h1 className="relative left-8 bottom-10 font-playfair font-extrabold text-3xl">Terbaru</h1>
                <article className="flex justify-center shadow-xl  ">
                    <div className="p-10 font-playfair">
                        <p className="font-extrabold mb-4">7 Jan 2022</p>
                        <h1 className="text-3xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae necessitatibus sint nulla, 
                            voluptas at aperiam suscipit modi distinctio quaerat ad 
                            aspernatur quo cumque deleniti adipisci ut, exercitationem consequuntur pariatur eveniet?
                        </h1>
                        <p className="opacity-90 mt-20"> - ade oktaviano</p>
                    </div>
                </article>
            </div>
            <article className='flex gap-x-4 relative bottom-52'>
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

            </article>
        </section>

        <section className="container my-10">
            <div className="h-[1px] w-full bg-black"></div>
            <h1 className="font-playfair my-10 relative left-8 font-extrabold text-3xl">Sorotan</h1>
            <div className="mx-5">
                <article className="flex flex-wrap">
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
            </div>
        </section>
        </>
    )
}

export default Home