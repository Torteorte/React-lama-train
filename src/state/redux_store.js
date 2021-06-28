import { applyMiddleware, combineReducers, createStore } from "redux";
import reducerMessage from "./dialogs_reducer";
import reducerSideBar from "./sideBar_reducer";
import reducerPost from "./profile_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app_reducer";
// import { Formik } from 'formik';

let reducers = combineReducers({
   dialogsPage: reducerMessage,
   profilePage: reducerPost,
   sideBarPage: reducerSideBar,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;