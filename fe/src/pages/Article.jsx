import { IoArrowForwardSharp } from "react-icons/io5"
import TitleSection from "../components/atoms/TitleSection"
import CardContent from "../components/CardsContent"

const Article = () => {
    return (
       <>
        <section className="container font-playfair">
            <TitleSection style="my-10 text-center" text="Artikel"/>
            <article className="flex flex-wrap">
                  <CardContent/>
                  <CardContent/>
                  <CardContent/>
            </article>
        </section>
        
       </>
    )
}

export default Article