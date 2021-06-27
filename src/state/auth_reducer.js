import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
   id: null,
   email: null,
   login: null,
   isAuth: false
   // isFetching: false
}

let authReducer = (state = initialState, action) => {
   if (action.type === SET_USER_DATA) {
      return { ...state, ...action.data }
   }
   return state
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } })

export const getAuthUserData = () => (dispatch) => {
   authAPI.authUser()
      .then(response => {
         if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
         }
      });
}

export const login = (email, password, rememberMe) => (dispatch) => {
   authAPI.loginUser(email, password, rememberMe)
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
         }
      });
}

export const logout = () => (dispatch) => {
   authAPI.logoutUser()
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
         }
      });
}

export default authReducer