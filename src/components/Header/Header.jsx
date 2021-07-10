import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import lama from './../../assets/img/llama.svg'

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.leftPart}>
                <img src={lama} alt="main logo" />
                <span className={styles.heading}>Lama Drama Site</span>
            </div>
            <div className={styles.loginLink}>
                {props.isAuth
                    ? <div className={styles.logOut}> {props.login} <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header >
    )
}

export default Header