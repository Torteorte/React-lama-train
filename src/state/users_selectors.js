export const getUsers = (state) => {
   return state.usersPage.usersData
}

export const getPageSize = (state) => {
   return state.usersPage.pageSize
}

export const getTotalUsers = (state) => {
   return state.usersPage.totalUsers
}

export const getCurrentPage = (state) => {
   return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
   return state.usersPage.isFetching
}

export const getToggleFollowingProgress = (state) => {
   return state.usersPage.toggleFollowingProgress
}

export const getFollowingProgress = (state) => {
   return state.usersPage.followingProgress
}