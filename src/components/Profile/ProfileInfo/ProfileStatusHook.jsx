import React, { useState } from 'react';
import styles from "./ProfileInfo.module.css";

const ProfileStatusHook = (props) => {

   let [editMode, setEditMode] = useState(false)
   let [status, setStatus] = useState(props.status)

   let activatedEditMode = () => {
      setEditMode(true)
   }

   let deActivatedEditMode = () => {
      setEditMode(false)
      props.updateStatus(status)
   }

   let onStatusChange = (e) => {
      setStatus(e.target.value)
   }

   // let componentDidUpdate = (prevProps, prevStatus) => {
   //    if (prevProps.status !== status) {
   //       setStatus(status)
   //    }
   // }

   return (
      <div className={styles.status}>
         {!editMode &&
            <div>
               <span onDoubleClick={activatedEditMode} >{props.status || "--"}</span>
            </div>
         }
         {editMode &&
            <div>
               <input onChange={onStatusChange} onBlur={deActivatedEditMode} value={status} autoFocus type="text" />
            </div>
         }
      </div>
   )
}

export default ProfileStatusHook