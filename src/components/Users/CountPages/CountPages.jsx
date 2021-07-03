import React from "react"
import styles from "./CountPages.module.css";

const CountPages = (props) => {

   let pageCount = Math.ceil(props.totalUsers / props.pageSize);

   let pages = [];
   for (let i = 1; i <= pageCount; i++) {
      pages.push(i)
   };

   return (
      <div>
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
      </div>
   )
}

export default CountPages