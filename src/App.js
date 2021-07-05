import React, { Suspense } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Preloader from './components/common/Preloader';
import store from './redux/redux_store'
import { Route } from 'react-router';
import { HashRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { initializedApp } from './redux/app_reducer';
import { Provider } from 'react-redux';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const Login = React.lazy(() => import('./components/Login/Login'));
class App extends React.Component {

  componentDidMount() {
    this.props.initializedApp()
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <HashRouter >
        <div className="app-wrapper">
          <HeaderContainer />
          <NavbarContainer />
          <div className="app-wrapper-content">
            <Suspense fallback={<div>Загрузка...</div>}>
              <Switch>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                <Route path='/dialogs' render={() => <DialogsContainer />} />
                <Route path='/users' render={() => <UsersContainer />} />
                <Route path='/news' render={() => <News />} />
                <Route path='/music' render={() => <Music />} />
                <Route path='/settings' render={() => <Settings />} />
                <Route path='/login' render={() => <Login />} />
              </Switch>
            </Suspense>
          </div>
        </div>
      </HashRouter>
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