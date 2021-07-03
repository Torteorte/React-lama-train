import React from "react"
import styles from "./Users.module.css";
import CountPages from "./CountPages/CountPages";
import User from "./User/User";

const Users = (props) => {

   return <div className={styles.users}>

      <CountPages
         currentPage={props.currentPage}
         totalUsers={props.totalUsers}
         pageSize={props.pageSize}
         onPagechange={props.onPagechange}
      />

      {
         props.usersData.map(users => <User
            users={users}
            key={users.id}
            followingProgress={props.followingProgress}
            unFollow={props.unFollow}
            follow={props.follow}
         />)
      }
   </div>
}

export default Users