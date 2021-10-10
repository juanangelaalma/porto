import axios from "axios"

const fetchAllPosts = () => axios.get('https://jsonplaceholder.typicode.com/posts')

const fetchPostById = (id) => axios.get('https://jsonplaceholder.typicode.com/posts/' + id)

export { fetchAllPosts, fetchPostById }