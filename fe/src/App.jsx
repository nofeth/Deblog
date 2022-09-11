import { Outlet, Route, Routes } from 'react-router-dom'
import {About, Article, Category, Home} from './pages'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/admin/Login'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="article" element={<Article/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="category" element={<Category/>}/>
      </Route>
      <Route path="/admin" element={<Login/>}>
        
      </Route>
    </Routes>
    </>
  )
}

function Layout() {
  return (
    <>
    <Navbar/>
      <main>
        <Outlet/>
      </main>
    <Footer/>
    </>
  )
}

export default App
