import Header from "./Header";
import { connect } from 'react-redux';
import { logout } from '../../redux/auth_reducer';

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

const HeaderContainer = connect(mapStateToProps, { logout })(Header)

export default HeaderContainer