import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET_STATUS"
const DELETE_POST = "DELETE_POST"

let initialState = {
   postsData: [
      { id: 1, message: "Hi, how are you?", likesCounts: 15 },
      { id: 2, message: "It's my first post.", likesCounts: 10 },
      { id: 3, message: "I love React.", likesCounts: 5 },
      { id: 4, message: "And hate motor.", likesCounts: 1 }
   ],
   profile: null,
   status: ""
}

let reducerPost = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: state.postsData.length + 1, message: action.newPostBody, likesCounts: 0
         }
         return {
            ...state,
            postsData: [...state.postsData, newPost]
         };
      }
      case SET_USER_PROFILE: {
         return { ...state, profile: action.profile };
      }
      case SET_STATUS: {
         return { ...state, status: action.status };
      }
      case DELETE_POST: {
         return { ...state, postsData: state.postsData.filter(p => p.id != action.userId) };
      }
      default:
         return state
   }

}

export const addPostAC = (newPostBody) => ({ type: ADD_POST, newPostBody })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getUserProfile = (userId) => (dispatch) => {
   profileAPI.getProfile(userId)
      .then(data => {
         dispatch(setUserProfile(data))
      })
}

export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getStatus = (userId) => (dispatch) => {
   profileAPI.getStatus(userId)
      .then(response => {
         dispatch(setStatus(response.data))
      })
}

export const updateStatus = (status) => (dispatch) => {
   profileAPI.updateStatus(status)
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
         }
      })
}

export const deletePost = (userId) => ({ type: DELETE_POST, userId })

export default reducerPost