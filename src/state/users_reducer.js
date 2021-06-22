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
   if (action.type === FOLLOW) {
      return {
         ...state,
         usersData: state.usersData.map(u => {
            if (u.id === action.userId) {
               return { ...u, followed: true }
            }
            return u
         })
      }
   }
   else if (action.type === UNFOLLOW) {
      return {
         ...state,
         usersData: state.usersData.map(u => {
            if (u.id === action.userId) {
               return { ...u, followed: false }
            }
            return u
         })
      }
   }
   else if (action.type === SET_USERS) {
      // return { ...state, usersData: [...state.usersData, ...action.usersData] }
      return { ...state, usersData: action.usersData }
   }
   else if (action.type === SET_CURRENT_PAGE) {
      return { ...state, currentPage: action.currentPage }
   }
   else if (action.type === SET_TOTAL_USERS_COUNT) {
      return { ...state, totalUsers: action.count }
   }
   else if (action.type === TOGGLE_IS_FETCHING) {
      return { ...state, isFetching: action.isFetching }
   }
   else if (action.type === TOGGLE_IS_FOLLOWING_PROGRESS) {
      return {
         ...state,
         followingProgress: action.isFetching
            ? [...state.followingProgress, action.userId]
            : state.followingProgress.filter(id => id !== action.userId)
      }
   }
   return state
}

export const follow = (userId) => ({ type: FOLLOW, userId })

export const unFollow = (userId) => ({ type: UNFOLLOW, userId })

export const setUsersData = (usersData) => ({ type: SET_USERS, usersData })

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count })

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export default usersReducer