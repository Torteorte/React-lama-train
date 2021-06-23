// import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessageActionCreator, onMessageChangeActionCreator } from "../../state/dialogs_reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
   return {
      messagesData: state.dialogsPage.messagesData,
      dialogsData: state.dialogsPage.dialogsData,
      newMessageText: state.dialogsPage.newMessageText
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

export default compose(
   withAuthRedirect,
   connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)