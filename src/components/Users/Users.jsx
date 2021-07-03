import React from "react"
import styles from "./Users.module.css";
import userDefaultPhoto from '../../assets/img/defaultPhoto.jpg'
import { NavLink } from 'react-router-dom';

const Users = (props) => {

   let pageCount = Math.ceil(props.totalUsers / props.pageSize);

   let pages = [];
   for (let i = 1; i <= pageCount; i++) {
      pages.push(i)
   };

   return <div className={styles.users}>
      <h2> Users</h2>
      <div className={styles.pages}>
         {pages.map(page => {
            return (
               <span className={props.currentPage === page ? styles.pageSelected : ""} onClick={() => { props.onPagechange(page) }} >
                  {page}
               </span>
            )
         })}
      </div>
      {
         props.usersData.map(users =>
            <div key={users.id} className={styles.user}>
               <div className={styles.leftInformation}>
                  <NavLink to={'/profile/' + users.id}>
                     <img src={users.photos.small != null ? users.photos.small : userDefaultPhoto} alt="User avatar" />
                  </NavLink>
                  <div className={styles.follow}>
                     {users.followed
                        ? <button className={styles.buttonUnFollow} disabled={props.followingProgress.some(userId => userId === users.id)} onClick={() => { props.unFollow(users.id) }}>
                           Unfollow
                        </button>
                        : <button className={styles.buttonFollow} post disabled={props.followingProgress.some(userId => userId === users.id)} onClick={() => { props.follow(users.id) }}>
                           Follow
                        </button>
                     }
                  </div>
               </div>
               <div className={styles.mainInformation}>
                  <div className={styles.nameStatus}>
                     <p>{users.name}</p>
                     <p>{users.status}</p>
                  </div>
                  <div className={styles.location}>
                     {/* <p>{users.location.city},</p> */}
                     {/* <p>{users.location.country}</p> */}
                  </div>
               </div>
            </div>)
      }
   </div>
}

export default Users