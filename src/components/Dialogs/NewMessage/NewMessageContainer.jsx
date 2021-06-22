// import React from "react";
// import { connect } from "react-redux";
// import { sendMessageActionCreator, onMessageChangeActionCreator } from "../../../state/dialogs_reducer";
// // import NewMessage from "./NewMessage";

// let mapStateToProps = (state) => {
//    return {
//       MessagesData: state.dialogsPage.MessagesData,
//       newMessageText: state.dialogsPage.newMessageText
//    }
// }

// let mapDispatchToProps = (dispatch) => {
//    return {
//       sendMessage: () => {
//          dispatch(sendMessageActionCreator())
//       },
//       onSendMessage: (message) => {
//          dispatch(onMessageChangeActionCreator(message))
//       }
//    }
// }

// const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage)


// export default NewMessageContainer;