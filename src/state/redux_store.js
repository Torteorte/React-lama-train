import { applyMiddleware, combineReducers, createStore } from "redux";
import reducerMessage from "./dialogs_reducer";
import reducerSideBar from "./sideBar_reducer";
import reducerPost from "./profile_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
   dialogsPage: reducerMessage,
   profilePage: reducerPost,
   sideBarPage: reducerSideBar,
   usersPage: usersReducer,
   auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;