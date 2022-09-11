import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="p-3 relative z-10 ">
            <h1 className="text-center text-5xl my-4 font-combo font-extrabold">Deblog</h1>
            <ul className="shadow-xl flex justify-evenly font-playfair items-center gap-5  max-w-[900px] mx-auto">
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
        </nav>
    )
}

export default Navbar