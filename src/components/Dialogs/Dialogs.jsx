import React from "react";
import styles from "./Dialogs.module.css";
import stylesButton from './../common/Buttons.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router";
import { Field, reduxForm } from 'redux-form'

const Dialogs = (props) => {

   let dialogsElements = props.dialogsData
      .map(dialog => <DialogItem name={dialog.name} id={dialog.id} src={dialog.src} key={dialog.id} />)

   let messagesElements = props.messagesData
      .map(mes => <Message message={mes.message} id={mes.id} key={mes.id} />)

   let addNewMessage = (values) => {
      props.sendMessage(values.newMessageBody)
   }

   if (!props.isAuth) return <Redirect to="/login" />

   return (
      <div className={styles.dialogs}>
         <div className={styles.dialogsItems}>
            {dialogsElements}
         </div>

         <div className={styles.messages}>
            {messagesElements}
            <MessageReduxForm onSubmit={addNewMessage} />
         </div>
      </div>
   )
}

const AddMessageForm = (props) => {
   return (
      <div className={styles.sendMessage}>
         <form action="" onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name="newMessageBody" id="" cols="25" rows="1" value={props.newMessageText} placeholder="Enter your message"></Field>
            <button className={stylesButton.buttonGreen}>Send</button>
         </form>
      </div>
   )
}

const MessageReduxForm = reduxForm({
   form: 'AddMessageForm'
})(AddMessageForm)

export default Dialogs;
