import React from 'react';
import Header from "./Header";
import { connect } from 'react-redux';
import { logout } from '../../redux/auth_reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { getUserProfile } from './../../redux/profile_reducer'

class HeaderContainer extends React.Component {

    componentRender() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(userId)
    }

    componentDidMount() {
        this.componentRender()
    }

    render() {
        return (<Header {...this.props}
            profile={this.props.profile} />)
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default compose(
    connect(mapStateToProps, { logout, getUserProfile }),
    withRouter
)(HeaderContainer)