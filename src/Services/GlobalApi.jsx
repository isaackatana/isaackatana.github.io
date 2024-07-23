import axios from "axios"
const BASE_URL = 'http://localhost:5173/api'

const getPost = axios.get(BASE_URL+'/')
const getPostById =()=> axios.get(BASE_URL+'/blogs/articles/'+id+'?populate=')

export default getPost

