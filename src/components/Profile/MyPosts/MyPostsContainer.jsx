// import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../state/profile_reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
   return {
      postsData: state.profilePage.postsData,
      newPostText: state.profilePage.newPostText
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      addPost: () => {
         dispatch(addPostActionCreator())
      },
      updateNewPostText: (text) => {
         dispatch(onPostChangeActionCreator(text))
      }
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer