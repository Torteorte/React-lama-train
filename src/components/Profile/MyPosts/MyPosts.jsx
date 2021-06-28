import React from 'react';
import styles from "./MyPosts.module.css";
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../Validators/validators';
import { TextArea } from '../../common/FormControls/FormsControl';
import ButtonGreen from '../../common/ButtonGreen/ButtonGreen';


const MyPosts = (props) => {

    let PostsElements = props.postsData
        .map(post => <Post message={post.message} likesCounts={post.likesCounts} id={post.id} key={post.id} />)

    let addNewPost = (values) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={styles.myPosts}>
            <h3>My posts</h3>

            <MyPostReduxForm onSubmit={addNewPost} />

            <div className={styles.posts}>
                {PostsElements}
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10)

const MyPostsForm = (props) => {
    return (
        <div>
            <form action="" onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        component={TextArea}
                        name="newPostBody"
                        value={props.newPostText}
                        validate={[required, maxLength10]} />
                </div>
                <ButtonGreen textButton="Add post" />
            </form>
        </div>
    )
}

const MyPostReduxForm = reduxForm({
    form: 'MyPostForm'
})(MyPostsForm)

export default MyPosts