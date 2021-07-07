import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import { getUserProfile, getStatus, updateStatus, savePhotoAC, saveProfile } from '../../redux/profile_reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

   componentRender() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = this.props.authorizedUserId
         if (!userId) {
            this.props.history.push("/login")
         }
      }
      this.props.getUserProfile(userId)
      this.props.getStatus(userId)
   }

   componentDidMount() {
      this.componentRender()
   }

   componentDidUpdate(prevProps, prevState) {
      if (this.props.match.params.userId !== prevProps.match.params.userId) {
         this.componentRender()
      }
   }

   render() {
      return <Profile {...this.props}
         isOwner={!this.props.match.params.userId}
         profile={this.props.profile}
         status={this.props.status}
         updateStatus={this.props.updateStatus}
         savePhoto={this.props.savePhotoAC} />
   }
}

let mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      authorizedUserId: state.auth.id,
      isAuth: state.auth.isAuth
   }
}

export default compose(
   connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhotoAC, saveProfile }),
   withRouter
)(ProfileContainer)