import { Link } from "react-router-dom"
export const Sidebar = () => {
  return (
    <aside className="flex fixed flex-col items-center pt-24 w-[300px] h-screen  gap-y-16 shadow-md ">
            <div className="flex flex-col items-center gap-y-5 justify-center">
                <img className="w-[100px] h-[100px] rounded-full shadow-lg border" src="" alt="" />
                <div className="text-center max-w-[200px] overflow-hidden">
                    <h3>Ade Oktaviano Arrahman </h3>
                    <p className="mt-1">Selamat Datang</p>
                </div>
            </div>
            <ul className="flex flex-col gap-y-10">
                <li>
                    <Link to="dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="article">Artikel</Link>
                </li>
                <li>
                    <Link to="category">Kategori</Link>
                </li>
                <li>
                    <Link to="logout">Logout</Link>
                </li>
            </ul>
        </aside>
  )
}
