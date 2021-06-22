import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Friends.module.css";

const Friends = (props) => {
   return (
      <NavLink to="#" className={styles.friendItem}>
         <li className={styles.friend}>
            <img src={props.src} alt="avatar" />
            {props.name}
         </li >
      </NavLink>
   )
}

export default Friends