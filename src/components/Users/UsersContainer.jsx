import React from 'react'
import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsersData, toggleIsFetching, unFollow, toggleFollowingProgress } from '../../state/users_reducer';
import Users from './Users'
import Preloader from '../common/Preloader';
import { UserAPI } from '../../api/api';
import { compose } from 'redux';
import { getCurrentPage, getFollowingProgress, getIsFetching, getPageSize, getToggleFollowingProgress, getTotalUsers, getUsers } from '../../state/users_selectors';

class UsersClassContainer extends React.Component {
   componentDidMount() {
      if (this.props.usersData.length === 0) {
         UserAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
               this.props.toggleIsFetching(false)
               this.props.setUsersData(data.items)
               this.props.setTotalUsersCount(data.totalCount)
            })
      }
   }

   onPagechange = (pageNumber) => {
      this.props.toggleIsFetching(true)
      this.props.setCurrentPage(pageNumber)
      UserAPI.getUsers(this.props.pageSize, pageNumber)
         .then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsersData(data.items)
         })
   }

   render() {
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users totalUsers={this.props.totalUsers}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            usersData={this.props.usersData}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            onPagechange={this.onPagechange}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingProgress={this.props.followingProgress}
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
      { follow, unFollow, setUsersData, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress })
)(UsersClassContainer)