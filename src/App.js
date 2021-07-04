import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializedApp } from './redux/app_reducer';
import Preloader from './components/common/Preloader';

import store from './redux/redux_store'
import { Provider } from 'react-redux';

class App extends React.Component {

  componentDidMount() {
    this.props.initializedApp()
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <NavbarContainer />
          <div className="app-wrapper-content">
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/login' render={() => <Login />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

// export default connect(mapStateToProps, { initializedApp })(App)

let AppContainer = connect(mapStateToProps, { initializedApp })(App)

let LamaJsApp = (props) => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default LamaJsApp