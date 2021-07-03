import * as axios from "axios";

const instance = axios.create({
   withCredentials: true,
   baseURL: `https://social-network.samuraijs.com/api/1.0/`,
   headers: {
      "API-KEY": "bf2baecf-01ae-42d3-8028-d5109ba659aa"
   }
})

export const UserAPI = {
   getUsers(pageSize = 1, currentPage = 10) {
      return instance.get(`users?count=${pageSize}&page=${currentPage}`)
   },
   followUser(id) {
      return instance.post(`follow/${id}`, {})
   },
   unFollowUser(id) {
      return instance.delete(`follow/${id}`)
   }
}

export const authAPI = {
   authUser() {
      return instance.get(`auth/me`)
   },

   loginUser(email, password, rememberMe = false) {
      return instance.post(`auth/login`, { email, password, rememberMe })
   },

   logoutUser() {
      return instance.delete(`auth/login`)
   }
}

export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/${userId}`)
   },

   getStatus(userId) {
      return instance.get(`profile/status/${userId}`)
   },

   updateStatus(status) {
      return instance.put(`profile/status`, { status: status })
   }
}