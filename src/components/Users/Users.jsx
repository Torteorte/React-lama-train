import React from "react"
import styles from "./Users.module.css";
import stylesButton from './../common/Buttons.module.css';
import userDefaultPhoto from '../../assets/img/defaultPhoto.jpg'
import { NavLink } from 'react-router-dom';
import { UserAPI } from "../../api/api";

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
               </span>)
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
                        ? <button className={styles.buttonUnFollow} disabled={props.followingProgress.some(id => id === users.id)} onClick={() => {
                           props.toggleFollowingProgress(true, users.id)
                           UserAPI.unFollowUser(users.id)
                              .then(response => {
                                 if (response.data.resultCode === 0) {
                                    props.unFollow(users.id)
                                 }
                                 props.toggleFollowingProgress(false, users.id)
                              })
                        }}>Unfollow</button>
                        : <button className={stylesButton.buttonGreen} disabled={props.followingProgress.some(id => id === users.id)} onClick={() => {
                           props.toggleFollowingProgress(true, users.id)
                           UserAPI.followUser(users.id)
                              .then(response => {
                                 if (response.data.resultCode === 0) {
                                    props.follow(users.id)
                                 }
                                 props.toggleFollowingProgress(false, users.id)
                              })
                        }}>Follow</button>
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