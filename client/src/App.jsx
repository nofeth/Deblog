import { Outlet, Route, Routes} from 'react-router-dom'
import {About, Article, Category, Home} from './pages'
import LayoutAdmin from './Templates/LayoutAdmin'
import { ArticleAdmin, CategoryAdmin, Dashboard, Login } from './pages/admin'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
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
        <Route path='article' element={<ArticleAdmin/>}/>
        <Route path='category' element={<CategoryAdmin/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
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
