import React from "react"
import styles from "./../Users.module.css";
import userDefaultPhoto from '../../../assets/img/defaultPhoto.jpg'
import { NavLink } from 'react-router-dom';

const User = (props) => {
   return (
      <div key={props.users.id} className={styles.user}>
         <div className={styles.leftInformation}>
            <NavLink to={'/profile/' + props.users.id}>
               <img src={props.users.photos.small != null ? props.users.photos.small : userDefaultPhoto} alt="User avatar" />
            </NavLink>
            <div className={styles.follow}>
               {props.users.followed
                  ? <button className={styles.buttonUnFollow} disabled={props.followingProgress.some(userId => userId === props.users.id)} onClick={() => { props.unFollow(props.users.id) }}>
                     Unfollow
                  </button>
                  : <button className={styles.buttonFollow} post disabled={props.followingProgress.some(userId => userId === props.users.id)} onClick={() => { props.follow(props.users.id) }}>
                     Follow
                  </button>
               }
            </div>
         </div>
         <div className={styles.mainInformation}>
            <div className={styles.nameStatus}>
               <p>{props.users.name}</p>
               <p>{props.users.status}</p>
            </div>
            <div className={styles.location}>
               {/* <p>{users.location.city},</p> */}
               {/* <p>{users.location.country}</p> */}
            </div>
         </div>
      </div>
   )
}

export default User