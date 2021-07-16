import React from 'react';
import styles from "./ProfileDataForm.module.css";
import { createField, Input, TextArea } from '../../common/FormControls/FormsControl';
import { Field, reduxForm } from 'redux-form'
import ButtonGrey from './../../common/ButtonGrey/ButtonGrey'
import { required } from './../../../Validators/validators'

const ProfileDataForm = (props) => {
   return (
      <form action="" onSubmit={props.handleSubmit} className={styles.formInfo}>
         <h2>Редактирование информации</h2>
         <div className={styles.formItem}>
            <b>Полное Имя: </b>{createField(Input, "fullName", "text", "Full Name", [required])}
         </div>

         <div className={styles.formItem}>
            <b>About me: </b>
            {createField(TextArea, "aboutMe", "text", "About Me", [required])}
         </div>
         <div className={styles.formItem}>
            <b>Looking for a job:</b>
            <Field
               component={"input"}
               name={"lookingForAJob"}
               type={"checkbox"} /> <span className={styles.checkBox}>Yes</span>
            {/* {createField(Input, "lookingForAJob", "checkbox", "lookingForAJob", null, "Yes")} */}
         </div>

         <div className={styles.formItem}>
            <b>My professional skills:</b> {createField(TextArea, "lookingForAJobDescription", "text", "My Skills", [required])}
         </div>
         <div>
            <b>Контакты:</b>
            <div className={` ${styles.contactsItems}`}>
               {Object.keys(props.profile.contacts).map(key => {
                  return <div className={styles.formItem} key={key}>
                     <b>{key}:</b> {createField(Input, "contacts." + key.toLocaleLowerCase(), key)}
                  </div>
               })}
            </div>
         </div>
         <div className={styles.buttonSave} ><ButtonGrey textButton="Сохранить изменения" /></div>
         {props.error && <div className={styles.formSummaryError}>
            {props.error}
         </div>
         }
      </form>
   )
}

const ProfileDataReduxForm = reduxForm({
   form: 'editProfile'
})(ProfileDataForm)

export default ProfileDataReduxForm