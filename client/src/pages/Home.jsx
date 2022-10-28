import axios from 'axios'
import { useState,useEffect } from 'react'
import TitleSection from '../components/atoms/TitleSection'
import CardContent from '../components/CardContent'
import api from '../api/api'
const Home = () => {

    const [data,setData] = useState([])

    async function getData(){
        try {
            const {data : {data}} = await axios.get(`${api}/article`)
            setData(JSON.parse(data))
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
      getData()
    }, [])
    

    return (
        <>
        <section className="container font-playfair">
            <div className="mx-auto blur-sm relative  bottom-10  w-full h-[400px] bg-slate-100"></div>
            <div className="mx-5 relative bottom-72">
                <TitleSection styles="relative left-8 bottom-10" text="Terbaru"/>
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
            <article className='flex flex-wrap  mx-3 lg:mx-0 lg:gap-y-0 relative bottom-52'>
                {data.map(e => {
                    return <CardContent key={e._id} author={e.author} content={e.content} date={e.date} links={e._id}/>
                })}
            </article>
        </section>

        <section className="container my-10">
            <div className="h-[1px] w-full bg-black"></div>
            <h1 className="font-playfair my-10 relative left-8 font-extrabold text-3xl">Sorotan</h1>
            <div className="lg:mx-5">
                <article className="flex flex-wrap">
                    <CardContent/>
                    <CardContent/>
                </article>
            </div>
        </section>
        </>
    )
}

export default Home