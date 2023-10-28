import { configureStore, combineReducers, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import user from "../reducers/user";
import course from "../reducers/course";
// import sideBar from './Reducer/SideBar'
// import userSlice from "./Reducer/UserSlice";
// import cartReducer from "./Reducer/cartSlice";

const rootReducer = combineReducers({
    user: user,
    course: course,
    // cart: cartReducer,
    // sideBar
});

export const store = configureStore(
    {
        reducer: rootReducer,
        devTools: true,
        middleware: [thunk]
    },
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()) ||
    compose
);