import img from '../assets/1.jpg'
import TitleSection from '../components/atoms/TitleSection'
const About = () => {
    return (
        <>
        <section className='container flex-wrap flex my-20'>
            <div className='xl:basis-1/2 basis-full '>
                <img className='' src={img} />
            </div>
            <div className='font-playfair xl:basis-1/2 basis-full '>
                <div className='relative xl:top-20'>
                    <div className='flex justify-center xl:block mx-auto '>
                        <TitleSection style="relative inline-block p-2 xl:right-10  border rounded-lg shadow-md" text="About" />
                    </div>
                    <p className='2xl:mt-20 p-5  shadow-md rounded-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laboriosam ex labore quis sit alias illum rem ipsa ipsum in maxime repellendus tempore eveniet dolor dicta blanditiis, recusandae quam corrupti at ratione totam, necessitatibus odit! Eligendi voluptates ducimus placeat nam?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cumque, iste, eos facilis ullam voluptatum voluptatem minus, exercitationem ut dolorem qui. Consequuntur nam repellendus laborum cumque et commodi iure? Quam!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ex laudantium repellat incidunt quia, accusamus pariatur reprehenderit fuga nam tenetur minus aspernatur facilis, repudiandae inventore iusto aliquam voluptate voluptas, impedit culpa non. Possimus ab incidunt ipsa perspiciatis mollitia facere odio. Nesciunt iure iusto sequi placeat sed eius illo saepe voluptates officiis asperiores? Porro eum, delectus optio aut sed cum accusamus eius ipsa. Excepturi facilis molestias ducimus assumenda harum animi eius illo, quisquam nesciunt. Veritatis dignissimos eos a nulla aperiam dolorem omnis rem molestiae adipisci voluptatibus. Corporis fugiat, nemo modi ducimus, similique asperiores odit accusantium rerum, laudantium beatae doloribus odio quisquam?
                    </p>
                </div>
            </div>
        </section>
        
        </>
    )
}

export default About