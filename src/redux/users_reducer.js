import { UserAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
   usersData: [],
   pageSize: 8,
   totalUsers: 19,
   currentPage: 1,
   isFetching: false,
   followingProgress: []
}

let usersReducer = (state = initialState, action) => {
   switch (action.type) {

      case FOLLOW:
         return {
            ...state,
            usersData: state.usersData.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u
            })
         }

      case UNFOLLOW:
         return {
            ...state,
            usersData: state.usersData.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u
            })
         }

      case SET_USERS:
         // return { ...state, usersData: [...state.usersData, ...action.usersData] }
         return { ...state, usersData: action.usersData }

      case SET_CURRENT_PAGE:
         return { ...state, currentPage: action.currentPage }

      case SET_TOTAL_USERS_COUNT:
         return { ...state, totalUsers: action.count }

      case TOGGLE_IS_FETCHING:
         return { ...state, isFetching: action.isFetching }

      case TOGGLE_IS_FOLLOWING_PROGRESS:
         return {
            ...state,
            followingProgress: action.isFetching
               ? [...state.followingProgress, action.userId]
               : state.followingProgress.filter(id => id !== action.userId)
         }

      default:
         return state
   }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })

export const unFollowSuccess = (userId) => ({ type: UNFOLLOW, userId })

export const setUsersData = (usersData) => ({ type: SET_USERS, usersData })

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count })

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const requestUsers = (pageSize, currentPage) => async (dispatch) => {
   dispatch(toggleIsFetching(true))
   dispatch(setCurrentPage(currentPage))

   let response = await UserAPI.getUsers(pageSize, currentPage);

   dispatch(toggleIsFetching(false))
   dispatch(setUsersData(response.data.items))
   dispatch(setTotalUsersCount(response.data.totalCount))
}

export const follow = (userId) => async (dispatch) => {
   dispatch(toggleFollowingProgress(true, userId))

   let response = await UserAPI.followUser(userId);

   if (response.data.resultCode === 0) {
      dispatch(followSuccess(userId))
   }
   dispatch(toggleFollowingProgress(false, userId))
}

export const unFollow = (userId) => async (dispatch) => {
   dispatch(toggleFollowingProgress(true, userId))

   let response = await UserAPI.unFollowUser(userId);

   if (response.data.resultCode === 0) {
      dispatch(unFollowSuccess(userId))
   }
   dispatch(toggleFollowingProgress(false, userId))
}

export default usersReducer