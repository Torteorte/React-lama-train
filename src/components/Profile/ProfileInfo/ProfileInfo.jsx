import React, { useState } from 'react';
import styles from "./ProfileInfo.module.css";
import Preloader from './../../common/Preloader';
import Contacts from './Contacts/Contacts';
import ProfileStatusHook from './ProfileStatusHook';
import userDefaultPhoto from '../../../assets/img/defaultPhoto.jpg'
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader />
    }

    let onChangeMainFoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData);
        setEditMode(false)
    }

    return (
        <div>
            <div>
                <img src="https://city.diia.gov.ua/assets/img/pages/city.jpg" alt="big background foto" />
            </div>
            <div className={styles.mainInfo}>
                <img src={props.profile.photos.large || userDefaultPhoto} alt="avatar-foto" />
                <div className={styles.status}>
                    <ProfileStatusHook status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} />
                </div>
            </div>
            <div>
                {props.isOwner && <input type={"file"} name={"myfile"} onChange={onChangeMainFoto} />}
            </div>
            {editMode
                ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
                : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={props.profile} isOwner={props.isOwner} />}
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <div className={styles.personInfo}>
            {props.isOwner && <div><button onClick={props.goToEditMode}>edit</button></div>}
            <div>
                <h2>{props.profile.fullName}</h2>
            </div>
            <b>About me: </b>
            <div className={styles.aboutMe}>
                {props.profile.aboutMe}
            </div>
            <div>
                <b>Looking for a job:</b> {props.lookingForAJob ? "yes" : "no"}
            </div>
            {props.profile.lookingForAJob &&
                <div>
                    <b>My professional skills:</b> {props.profile.lookingForAJobDescription}
                </div>
            }
            <Contacts contacts={props.profile.contacts} />
        </div>
    )
}



export default ProfileInfo