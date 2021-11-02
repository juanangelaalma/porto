import axios from 'axios'

import { API_URL } from '../constants'
import authHeader from './auth.header'

const getAllCategories = () => axios.get(API_URL + "/categories")

const createCategory = (newData) => axios.post(API_URL + "/categories", newData, { headers: authHeader() })

const deleteCategory = (id) => axios.delete(API_URL + "/categories/" + id, { headers: authHeader() })

export { getAllCategories, createCategory, deleteCategory }