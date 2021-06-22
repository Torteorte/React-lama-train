import React from "react";
import styles from "./Dialogs.module.css";
import stylesButton from './../common/Buttons.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

   let dialogsElements = props.dialogsData
      .map(dialog => <DialogItem name={dialog.name} id={dialog.id} src={dialog.src} key={dialog.id} />)

   let messagesElements = props.messagesData
      .map(mes => <Message message={mes.message} id={mes.id} key={mes.id} />)

   let sendMessageClick = () => {
      props.sendMessage()
   }

   let onSendMessageChange = (event) => {
      let message = event.target.value
      props.onSendMessage(message)
   }
   return (
      <div className={styles.dialogs}>
         <div className={styles.dialogsItems}>
            {dialogsElements}
         </div>

         <div className={styles.messages}>
            {messagesElements}
            <div className={styles.sendMessage}>
               <textarea name="" id="" cols="25" rows="1" onChange={onSendMessageChange} value={props.newMessageText} placeholder="Enter your message"></textarea>
               <button className={stylesButton.buttonGreen} onClick={sendMessageClick}>Send</button>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;
