import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://image.flaticon.com/icons/png/512/147/147142.png" alt="avatar icon" />
            {props.message}
            <div>
                <span>Like</span> {props.likesCounts}
            </div>
        </div>
    )
}

export default Post