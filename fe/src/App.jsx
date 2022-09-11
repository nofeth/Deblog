import { Outlet, Route, Routes } from 'react-router-dom'
import {About, Article, Category, Home} from './pages'
import { AddArticle, AddCategory, Dashboard, Login } from './pages/admin'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
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
      <Route path="/login" element={<Login/>} />
      <Route path='/admin' element={<LayoutAdmin/>}>
        <Route index path='dashboard' element={<Dashboard/>}/>
        <Route path='add-article' element={<AddArticle/>}/>
        <Route path='dashboard' element={<AddCategory/>}/>
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

function LayoutAdmin() {
  return (
    <>
    <main>
      <Outlet/>
    </main>
    </>
  )
}

export default App
