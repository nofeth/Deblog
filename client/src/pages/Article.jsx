import { useState, useEffect } from "react"
import axios from 'axios'
import { IoArrowForwardSharp } from "react-icons/io5"
import TitleSection from "../components/atoms/TitleSection"
import CardContent from "../components/CardContent"
import api from '../api/api'
const Article = () => {
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
            <TitleSection style="my-10 text-center" text="Artikel"/>
            <article className="flex flex-wrap">
            {data.map(e => {
                    return <CardContent key={e._id} author={e.author} content={e.content} date={e.date} links={e._id}/>
                })}
            </article>
        </section>
        
       </>
    )
}

export default Article