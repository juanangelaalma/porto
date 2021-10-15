import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  CLEAR_MESSAGE,
} from "./type";

import AuthService from "../services/auth.service";

const login = (user) => async (dispatch) => {
  try {
    const { data } = await AuthService.login(user);

    localStorage.setItem('user', JSON.stringify(data))

    dispatch({ type: LOGIN_SUCCESS, payload: { user: data } });
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    
    dispatch({ type: LOGIN_FAIL })
    dispatch({ type: SET_MESSAGE, payload: message })
  }
};

const logout = () => (dispatch) => {
  AuthService.logout()
  
  dispatch({ type: LOGOUT })
}

export { login, logout }
