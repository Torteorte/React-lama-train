import React, { useState } from 'react';
import styles from "./ProfileInfo.module.css";
import Preloader from './../../common/Preloader/Preloader';
import Contacts from './Contacts/Contacts';
import ProfileStatusHook from './ProfileStatusHook/ProfileStatusHook';
import userDefaultPhoto from '../../../assets/img/defaultPhoto.jpg'
import ProfileDataForm from './ProfileDataForm';
import ButtonGrey from '../../common/ButtonGrey/ButtonGrey';
import uploadImage from './../../../assets/img/photo-camera.svg'

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return (
            <div className={styles.preloaderProfile}>
                <Preloader />
            </div>
        )
    }

    let onChangeMainFoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div>
            <div className={styles.fotoLarge}>
                <img src="https://city.diia.gov.ua/assets/img/pages/city.jpg" alt="big background foto" />
                <div className={styles.avatar}>
                    <img src={props.profile.photos.large || userDefaultPhoto} alt="avatar-foto" />
                </div>
                <div >
                    {props.isOwner && <div>
                        <input className={styles.inputAvatar} type={"file"} name={"myfile"} onChange={onChangeMainFoto} id="avatarFile" />
                        <label htmlFor="avatarFile" className={styles.avatarFileInput}>
                            <img src={uploadImage} alt="avatar" />
                        </label>
                    </div>}
                </div>
            </div>
            <div className={styles.mainInfo}>
                <div className={styles.NameStatus}>
                    <h1>{props.profile.fullName}</h1>
                    <ProfileStatusHook status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} />
                </div>
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

            <b>Краткая информация: </b>
            <div className={styles.aboutMe}>
                {props.profile.aboutMe}
            </div>
            <div>
                <b>Поиск работы:</b> {props.profile.lookingForAJob ? "да" : "нет"}
            </div>
            {props.profile.lookingForAJob &&
                <div>
                    <b>Мои профессиональные навыки:</b> {props.profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>Контакты:</b>
                <Contacts contacts={props.profile.contacts} />
            </div>
            {props.isOwner && <div className={styles.Edit}> <img src="https://img.icons8.com/ios/100/000000/pencil--v1.png" alt="edit" /> <ButtonGrey onClick={props.goToEditMode} textButton="Редактировать профиль" /></div>}
        </div>
    )
}

export default ProfileInfo