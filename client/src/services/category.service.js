import axios from 'axios'

import { API_URL } from '../constants'

const getAllCategories = () => axios.get(API_URL + "/categories")

export { getAllCategories }