// import React from 'react';
import { connect } from 'react-redux';
import { addPostAC } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
   return {
      postsData: state.profilePage.postsData,
      newPostText: state.profilePage.newPostText
   }
}

const MyPostsContainer = connect(mapStateToProps, { addPostAC })(MyPosts)

export default MyPostsContainer