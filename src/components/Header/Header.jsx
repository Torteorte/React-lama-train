import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src="https://upload.wikimedia.org/wikipedia/ru/c/cb/Raspberry_Pi_Logo.svg" alt="main logo" />
            <div className={styles.loginLink}>
                {props.isAuth
                    ? <div className={styles.logOut}> {props.login} <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header >
    )
}

export default Header