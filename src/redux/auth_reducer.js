import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL = "GET_CAPTCHA_URL"

let initialState = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
   captchaUrl: null
   // isFetching: false
}

let authReducer = (state = initialState, action) => {
   switch (action.type) {

      case SET_USER_DATA:
         return { ...state, ...action.data }

      case GET_CAPTCHA_URL:
         return { ...state, captchaUrl: action.captchaUrl }

      default:
         return state
   }
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } })

export const getCaptchaAC = (captchaUrl) => ({ type: GET_CAPTCHA_URL, captchaUrl })

export const getAuthUserData = () => async (dispatch) => {
   let response = await authAPI.authUser();

   if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
   }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
   let response = await authAPI.loginUser(email, password, rememberMe, captcha);

   if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
   }
   else {
      if (response.data.resultCode === 10) {
         dispatch(getCaptchaUrl())
      }
      let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
      dispatch(stopSubmit("login", { _error: message }))
   }
}

export const logout = () => async (dispatch) => {
   let response = await authAPI.logoutUser();

   if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
   }
}

export const getCaptchaUrl = () => async (dispatch) => {
   const response = await securityAPI.getCaptcha();
   const captchaUrl = response.data.url
   dispatch(getCaptchaAC(captchaUrl))
}

export default authReducer