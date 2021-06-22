import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import { getUserProfile } from '../../state/profile_reducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 2
      }
      this.props.getUserProfile(userId)
   }

   render() {
      return <Profile {...this.props} profile={this.props.profile} />
   }
}

let mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile
   }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent)
