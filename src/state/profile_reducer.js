import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE"

let initialState = {
   postsData: [
      { id: 1, message: "Hi, how are you?", likesCounts: 15 },
      { id: 2, message: "It's my first post.", likesCounts: 10 },
      { id: 3, message: "I love React.", likesCounts: 5 },
      { id: 4, message: "And hate motor.", likesCounts: 1 }
   ],
   newPostText: "Hi world",
   profile: null
}

let reducerPost = (state = initialState, action) => {

   if (action.type === ADD_POST) {
      let newPost = {
         id: state.postsData.length + 1, message: state.newPostText, likesCounts: 0
      }

      return {
         ...state,
         postsData: [...state.postsData, newPost],
         newPostText: ""
      };
   }
   else if (action.type === UPDATE_NEW_POST_TEXT) {
      return {
         ...state,
         newPostText: action.newText
      };
   }
   else if (action.type === SET_USER_PROFILE) {
      return { ...state, profile: action.profile };
   }
   else return state
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const onPostChangeActionCreator = (text) => ({
   type: UPDATE_NEW_POST_TEXT,
   newText: text
})

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getUserProfile = (userId) => (dispatch) => {
   profileAPI.profileUser(userId)
      .then(data => {
         dispatch(setUserProfile(data))
      })
}

export default reducerPost