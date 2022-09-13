import { IoArrowForwardSharp } from "react-icons/io5"
import { Link } from "react-router-dom"
const CardContent = () => {
    return (
        <>
        <div className='xl:basis-1/2 p-2'>
            <div className="p-10 border font-playfair basis-1/2 ">
                <p className="font-extrabold mb-4">7 Jan 2022</p>
                <h1 className="text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae necessitatibus sint nulla, 
                    voluptas at aperiam suscipit modi distinctio quaerat ad 
                    aspernatur quo cumque deleniti adipisci ut, exercitationem consequuntur pariatur eveniet?
                </h1>
                <div className='flex items-center justify-between mt-20 flex-row'>
                    <p className=" opacity-90 ">- ade oktaviano</p>
                    <Link to="/" className="flex items-center">Baca Selengkapnya<span className='ml-1'><IoArrowForwardSharp/></span></Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardContent