import axios from 'axios'
import {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../api/api'
const DetailArticle = () => {
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const {id} = useParams()
  const redirect = useNavigate()
  async function detailArticle() {
    try {
      const data = await axios.get(`${api}/article/${id}`)
    } catch (error) {
      if (error.response) {
        redirect('/')
        
      }
    }
  }
  useEffect(() => {
    detailArticle()
  }, [])
  
  return (
    <>

    </>
  )
}

export default DetailArticle