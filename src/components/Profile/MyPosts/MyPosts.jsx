import React from 'react';
import styles from "./MyPosts.module.css";
import stylesButton from './../../common/Buttons.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let PostsElements = props.postsData
        .map(post => <Post message={post.message} likesCounts={post.likesCounts} id={post.id} key={post.id} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={styles.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button className={stylesButton.buttonGreen} onClick={onAddPost}>Add post</button>
                    <button className={styles.clearButton}>Clear</button>
                </div>
            </div>
            <div className={styles.posts}>
                {PostsElements}
            </div>
        </div>
    )
}

export default MyPosts