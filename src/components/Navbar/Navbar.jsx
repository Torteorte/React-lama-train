import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Navbar.module.css";
import Friends from "./Friends/Friends"

const Navbar = (props) => {
    let friendsElements = props.friendsData
        .map(friend => <Friends name={friend.name} src={friend.src} key={friend.id} id={friend.id} />)
    return (
        <nav className={styles.nav}>
            <div className={`${styles.item} ${styles.active}`}>
                <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/dialogs" activeClassName={styles.active}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/users" activeClassName={styles.active}>Users</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/news" activeClassName={styles.active}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/music" activeClassName={styles.active}>Music</NavLink>
            </div>
            <div className={`${styles.item} ${styles.settings}`}>
                <NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink>
            </div>
            <div className={`${styles.friends}`}>
                <h2>Friends</h2>
                <ul>
                    {friendsElements}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar