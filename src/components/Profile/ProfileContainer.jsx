import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import { getUserProfile, getStatus, updateStatus } from '../../state/profile_reducer';
import { withRouter } from 'react-router-dom';
// import { Redirect } from "react-router"; // редирект на логин
// import { withAuthRedirect } from '../../hoc/withAuthRedirect'; // редирект на логин
import { compose } from 'redux';

class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 17657
      }
      this.props.getUserProfile(userId)
      this.props.getStatus(userId)
   }

   render() {

      // if (!this.props.isAuth) return <Redirect to="/login" /> // редирект на логин

      return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
   }
}

let mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
      status: state.profilePage.status
   }
}

export default compose(
   connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
   withRouter,
   // withAuthRedirect // редирект на логин
)(ProfileContainer)