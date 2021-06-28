import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router";
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from "../../Validators/validators";
import { TextArea } from "../common/FormControls/FormsControl";
import ButtonGreen from "../common/ButtonGreen/ButtonGreen";

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

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
   return (
      <div className={styles.sendMessage}>
         <form action="" onSubmit={props.handleSubmit}>
            <Field
               component={TextArea}
               name="newMessageBody"
               value={props.newMessageText}
               placeholder="Enter your message"
               validate={[required, maxLength50]} />
            <ButtonGreen textButton="Send" />

         </form>
      </div>
   )
}

const MessageReduxForm = reduxForm({
   form: 'AddMessageForm'
})(AddMessageForm)

export default Dialogs;
