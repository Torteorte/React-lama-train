// import reducerMessage from "./dialogs_reducer"
// import reducerPost from "./profile_reducer"

// let store = {

//    _state: {
//       profilePage: {
//          postsData: [
//             { id: 1, message: "Hi, how are you?", likesCounts: 15 },
//             { id: 2, message: "It's my first post.", likesCounts: 10 },
//             { id: 3, message: "I love React.", likesCounts: 5 },
//             { id: 4, message: "And hate motor.", likesCounts: 1 }
//          ],
//          newPostText: "Hi world"
//       },

//       dialogsPage: {
//          dialogsData: [
//             { id: 1, name: "Alex", src: "https://image.flaticon.com/icons/png/512/213/213315.png" },
//             { id: 2, name: "Vadim", src: "https://image.flaticon.com/icons/png/512/213/213292.png" },
//             { id: 3, name: "Morina", src: "https://image.flaticon.com/icons/png/128/213/213338.png" },
//             { id: 4, name: "Sasha", src: "https://image.flaticon.com/icons/png/512/213/213280.png" },
//             { id: 5, name: "Vita", src: "https://image.flaticon.com/icons/png/512/213/213345.png" }
//          ],

//          messagesData: [
//             { id: 1, message: "Hi." },
//             { id: 2, message: "How are you?" },
//             { id: 3, message: "I want eat some russian baby!" }
//          ],
//          newMessageText: ""
//       },

//       sideBarPage: {
//          friendsData: [
//             { id: 1, name: 'Alex', src: "https://image.flaticon.com/icons/png/512/213/213315.png" },
//             { id: 1, name: 'Vadim', src: "https://image.flaticon.com/icons/png/512/213/213292.png" },
//             { id: 1, name: 'Sasha', src: "https://image.flaticon.com/icons/png/512/213/213280.png" }
//          ]
//       }
//    },

//    _callReRender() {

//    },

//    getState() {
//       return this._state
//    },

//    subscribe(observer) {
//       this._callReRender = observer
//    },

//    dispatch(action) {
//       this._state.profilePage = reducerPost(this._state.profilePage, action)
//       this._state.dialogsPage = reducerMessage(this._state.dialogsPage, action)
//       this._callReRender(this._state)
//    }
// }

// export default store
// window.store = store