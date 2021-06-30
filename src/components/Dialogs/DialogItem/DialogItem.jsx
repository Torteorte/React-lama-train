import React from "react";
import styles from "./../Dialogs.module.css";
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
   return (
      <div>
         <NavLink to={`/dialogs/${props.id}`} className={styles.dialog}>
            <img src={props.src} alt="avatar" />
            <p>{props.name}</p>
         </NavLink>
      </div>
   )
}

export default DialogItem;
