const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

let initialState = {
   dialogsData: [
      { id: 1, name: "Alex", src: "https://image.flaticon.com/icons/png/512/213/213315.png" },
      { id: 2, name: "Vadim", src: "https://image.flaticon.com/icons/png/512/213/213292.png" },
      { id: 3, name: "Morina", src: "https://image.flaticon.com/icons/png/128/213/213338.png" },
      { id: 4, name: "Sasha", src: "https://image.flaticon.com/icons/png/512/213/213280.png" },
      { id: 5, name: "Vita", src: "https://image.flaticon.com/icons/png/512/213/213345.png" }
   ],

   messagesData: [
      { id: 1, message: "Hi." },
      { id: 2, message: "How are you?" },
      { id: 3, message: "I want eat some russian baby!" }
   ],
   newMessageText: ""
}

let reducerMessage = (state = initialState, action) => {

   if (action.type === SEND_MESSAGE) {
      let newMessage = {
         id: state.messagesData.length + 1, message: state.newMessageText
      }

      return { // stateCopy
         ...state,
         messagesData: [...state.messagesData, newMessage],
         newMessageText: ""
      }
   }
   else if (action.type === UPDATE_NEW_MESSAGE) {
      return {
         ...state,
         newMessageText: action.newTextMessage
      }
   }
   return state
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })

export const onMessageChangeActionCreator = (message) => ({
   type: UPDATE_NEW_MESSAGE,
   newTextMessage: message
})

export default reducerMessage