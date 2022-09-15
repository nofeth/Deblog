import { Outlet } from "react-router-dom"
import { Sidebar } from "../components/admin/Sidebar"

const LayoutAdmin = () => {
    return (
      <>
      <main className='flex'>
        <Sidebar/>
        <Outlet/>
      </main>
      </>
    )
  }

  export default LayoutAdmin