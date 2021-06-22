// import React from "react";
import { connect } from "react-redux";
import { sendMessageActionCreator, onMessageChangeActionCreator } from "../../state/dialogs_reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
   return {
      messagesData: state.dialogsPage.messagesData,
      dialogsData: state.dialogsPage.dialogsData,
      newMessageText: state.dialogsPage.newMessageText,
      isAuth: state.auth.isAuth
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      sendMessage: () => {
         dispatch(sendMessageActionCreator())
      },
      onSendMessage: (message) => {
         dispatch(onMessageChangeActionCreator(message))
      }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;
