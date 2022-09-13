import CardContent from '../components/CardsContent'
import CardCategory from '../components/atoms/CardCategory'
import TitleSection from '../components/atoms/TitleSection'
const Category = () => {
    let a = 10
    return (
        <section className="container font-playfair">
            <TitleSection text="Category" style="my-10 text-center"/>
            <article className="shadow-xl mx-10 rounded-xl xl:mx-auto max-w-[1000px] overflow-scroll h-[300px]">
                <form action="" className="flex m-5 flex-wrap gap-x-1 gap-y-1  ">
                   <CardCategory/> 
                </form>
            </article>
            <article>
            <article className="flex flex-wrap my-10">
                    <CardContent/>
                </article>
            </article>
        </section>
    )
}

export default Category