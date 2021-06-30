import React from 'react';
import styles from "./ProfileInfo.module.css";
import Preloader from './../../common/Preloader';
// import Contacts from './Contacts/Contacts';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusHook from './ProfileStatusHook';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src="https://city.diia.gov.ua/assets/img/pages/city.jpg" alt="big background foto" />
            </div>
            <div className={styles.mainInfo}>
                <img src={props.profile.photos.large} alt="avatar-foto" />

                <div className={styles.personInfo}>
                    <ProfileStatusHook status={props.status} updateStatus={props.updateStatus} />
                    <div className={styles.aboutMe}>{props.profile.aboutMe}</div>
                    {/* <Contacts contacts={props.profile.contacts} /> */}
                </div>
            </div>
            <h2>{props.profile.fullName}</h2>

        </div>
    )
}

export default ProfileInfo