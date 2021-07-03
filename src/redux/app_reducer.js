import { getAuthUserData } from "./auth_reducer";

const INITIALIZED_SUCCSES = "INITIALIZED_SUCCSES";

let initialState = {
   initialized: false
}

let appReducer = (state = initialState, action) => {

   switch (action.type) {

      case INITIALIZED_SUCCSES:
         return {
            ...state,
            initialized: true
         }

      default:
         return state
   }

}

export const initializedSuccses = () => ({ type: INITIALIZED_SUCCSES })

export const initializedApp = () => (dispatch) => {

   let promise = dispatch(getAuthUserData())

   Promise.all([promise])
      .then(() => {
         dispatch(initializedSuccses())
      })
}

export default appReducer