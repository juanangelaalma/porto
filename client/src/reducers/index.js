import { combineReducers } from 'redux'
import auth from './auth'
import message from './message'

const rootReducers = combineReducers({auth, message})

export default rootReducers