import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import { getUserProfile } from '../../state/profile_reducer';
import { withRouter } from 'react-router-dom';
import { Redirect } from "react-router";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 2
      }
      this.props.getUserProfile(userId)
   }

   render() {

      if (!this.props.isAuth) return <Redirect to="/login" />

      return <Profile {...this.props} profile={this.props.profile} />
   }
}

let mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile
   }
}

export default compose(
   withAuthRedirect,
   withRouter,
   connect(mapStateToProps, { getUserProfile })
)(ProfileContainer)