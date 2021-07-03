import React from 'react'
import { connect } from 'react-redux';
import {
   followSuccess,
   unFollowSuccess,
   setCurrentPage,
   setTotalUsersCount,
   setUsersData,
   toggleIsFetching,
   toggleFollowingProgress,
   requestUsers,
   follow,
   unFollow
} from '../../redux/users_reducer';
import Users from './Users'
import Preloader from '../common/Preloader';
import { compose } from 'redux';
import {
   getCurrentPage,
   getFollowingProgress,
   getIsFetching,
   getPageSize,
   getToggleFollowingProgress,
   getTotalUsers,
   getUsers
} from '../../redux/users_selectors';

class UsersClassContainer extends React.Component {
   componentDidMount() {
      this.props.requestUsers(this.props.pageSize, this.props.currentPage);
   }

   onPagechange = (pageNumber) => {
      this.props.requestUsers(this.props.pageSize, pageNumber);
   }

   render() {
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users totalUsers={this.props.totalUsers}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            usersData={this.props.usersData}
            unFollowSuccess={this.props.unFollowSuccess}
            followSuccess={this.props.followSuccess}
            onPagechange={this.onPagechange}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingProgress={this.props.followingProgress}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
         />
      </>
   }
}

let mapStateToProps = (state) => {
   return {
      usersData: getUsers(state),
      pageSize: getPageSize(state),
      totalUsers: getTotalUsers(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      toggleFollowingProgress: getToggleFollowingProgress(state),
      followingProgress: getFollowingProgress(state)
   }
}

export default compose(
   connect(mapStateToProps,
      { followSuccess, unFollowSuccess, setUsersData, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress, requestUsers, follow, unFollow })
)(UsersClassContainer)