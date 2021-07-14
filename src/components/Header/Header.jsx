import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import lama from './../../assets/img/llama.svg'
import ButtonGrey from '../common/ButtonGrey/ButtonGrey';
import userDefaultPhoto from './../../assets/img/defaultPhoto.jpg'
import Preloader from '../common/Preloader/Preloader';

const Header = (props) => {

    if (!props.profile) {
        return (
            <div className={styles.preloaderProfile}>
                <Preloader />
            </div>
        )
    }

    return (
        <header className={styles.header}>
            <div className={styles.leftPart}>
                <img src={lama} alt="main logo" />
                <span className={styles.heading}>Lama Drama Site</span>
            </div>
            <div className={styles.loginLink}>
                {props.isAuth
                    ? <div className={styles.logOut}>
                        <div className={styles.loginSmallInfo}>
                            <img src={props.profile.photos.large || userDefaultPhoto} alt="Avatar" />
                            <div>{props.login}</div>
                        </div>
                        <ButtonGrey onClick={props.logout} textButton="Log out" />
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header >
    )
}

export default Header