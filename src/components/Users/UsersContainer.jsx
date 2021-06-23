import React from 'react'
import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsersData, toggleIsFetching, unFollow, toggleFollowingProgress } from '../../state/users_reducer';
import Users from './Users'
import Preloader from '../common/Preloader';
import { UserAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

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
      usersData: state.usersPage.usersData,
      pageSize: state.usersPage.pageSize,
      totalUsers: state.usersPage.totalUsers,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      toggleFollowingProgress: state.usersPage.toggleFollowingProgress,
      followingProgress: state.usersPage.followingProgress
   }
}

export default withAuthRedirect(connect(mapStateToProps,
   { follow, unFollow, setUsersData, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress })(UsersClassContainer))