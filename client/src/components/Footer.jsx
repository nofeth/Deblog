import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer className="container my-20">
                <div className="h-[1px] w-full bg-black "></div>
                <h1 className="text-center text-5xl my-4 font-combo font-extrabold">
                 <Link to="/"> Deblog</Link>
                </h1>
                <ul className="flex gap-5 justify-center font-playfair items-center  mx-auto">
                    <li>
                        <Link className="py-4 inline-block" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="py-4 inline-block" to="/article">Article</Link>
                    </li>
                    <li>
                        <Link className="py-4 inline-block" to="/category">Category</Link>
                    </li>
                    <li>
                        <Link className="py-4 inline-block" to="/about">About</Link>
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default Footer