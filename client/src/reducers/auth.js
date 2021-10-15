import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/type";

const user = localStorage.getItem('user')

const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false }

export default function(state = initialState, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, user: action.payload.user }
    case LOGIN_FAIL:
      return { ...state, isLoggedIn: false, user: null }
    case LOGOUT:
      return { ...state, isLoggedIn: false, user: null }
    default:
      return state
  }
}