import React from 'react';
import styles from "./Post.module.css";
import heart from './../../../../assets/img/heart-icon_34407.ico'

const Post = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.avatarMessage}>
                <img src="https://image.flaticon.com/icons/png/512/147/147142.png" alt="avatar icon" />
                <span className={styles.message}>{props.message}</span>
            </div>

            <div>
                <span className={styles.likes}> <img src={heart} alt="likes" /></span> {props.likesCounts}
            </div>
        </div>
    )
}

export default Post