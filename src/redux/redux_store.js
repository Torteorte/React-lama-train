import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import reducerMessage from "./dialogs_reducer";
import reducerSideBar from "./sideBar_reducer";
import reducerPost from "./profile_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app_reducer";

let reducers = combineReducers({
   dialogsPage: reducerMessage,
   profilePage: reducerPost,
   sideBarPage: reducerSideBar,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store

export default store;