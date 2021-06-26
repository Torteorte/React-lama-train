const SEND_MESSAGE = "SEND-MESSAGE";

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
   ]
}

let reducerMessage = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE:
         let newMessage = {
            id: state.messagesData.length + 1, message: action.newMessageBody
         }
         return {
            ...state,
            messagesData: [...state.messagesData, newMessage]
         }
      default:
         return state
   }
}

export const sendMessageAC = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default reducerMessage