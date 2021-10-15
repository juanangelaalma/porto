import axios from 'axios'

import { API_URL } from '../constants'

const login = (user) => axios.post(API_URL + '/users/login', user)

const logout = () => localStorage.removeItem('user')

export default {login, logout}