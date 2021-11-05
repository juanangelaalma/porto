import axios from "axios"

import { API_URL } from "../../constants"

const fetchAllPosts = () => axios.get(API_URL + '/posts')

const fetchPostById = (slug) => axios.get(API_URL + '/posts/' + slug) 

export { fetchAllPosts, fetchPostById }