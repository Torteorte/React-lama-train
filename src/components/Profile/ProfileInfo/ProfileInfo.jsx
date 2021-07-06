import React from 'react';
import styles from "./ProfileInfo.module.css";
import Preloader from './../../common/Preloader';
// import Contacts from './Contacts/Contacts';
import ProfileStatusHook from './ProfileStatusHook';
import userDefaultPhoto from '../../../assets/img/defaultPhoto.jpg'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    let onChangeMainFoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div>
                <img src="https://city.diia.gov.ua/assets/img/pages/city.jpg" alt="big background foto" />
            </div>
            <div className={styles.mainInfo}>
                <img src={props.profile.photos.large || userDefaultPhoto} alt="avatar-foto" />
                <div className={styles.personInfo}>
                    <ProfileStatusHook status={props.status} updateStatus={props.updateStatus} />
                    <div className={styles.aboutMe}>{props.profile.aboutMe}</div>
                    {/* <Contacts contacts={props.profile.contacts} /> */}
                </div>
            </div>
            <div>
                {props.isOwner && <input type={"file"} name={"myfile"} onChange={onChangeMainFoto} />}
            </div>

            <h2>{props.profile.fullName}</h2>

        </div>
    )
}

export default ProfileInfo