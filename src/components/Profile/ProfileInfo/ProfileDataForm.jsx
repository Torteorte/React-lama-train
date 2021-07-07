import React from 'react';
import styles from "./ProfileInfo.module.css";
import { createField, Input, TextArea } from '../../common/FormControls/FormsControl';
import { Field, reduxForm } from 'redux-form'

const ProfileDataForm = (props) => {
   return (
      <form action="" onSubmit={props.handleSubmit}>
         <div><button>Save</button></div>
         <div>
            {createField(Input, "fullName", "text", "Full Name")}
         </div>
         <b>About me: </b>
         <div className={styles.aboutMe}>
            {createField(Input, "aboutMe", "text", "About Me")}
         </div>
         <div>
            <b>Looking for a job:</b>
            <Field
               component={"input"}
               name={"lookingForAJob"}
               type={"checkbox"} /> <span className={styles.checkBox}>Yes</span>
            {/* {createField(Input, "lookingForAJob", "checkbox", "lookingForAJob", null, "Yes")} */}
         </div>

         <div>
            <b>My professional skills:</b> {createField(TextArea, "lookingForAJobDescription", "text", "My Skills")}
         </div>
      </form>
   )
}

const ProfileDataReduxForm = reduxForm({
   form: 'editProfile'
})(ProfileDataForm)

export default ProfileDataReduxForm