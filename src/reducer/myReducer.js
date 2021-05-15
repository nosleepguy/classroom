import {combineReducers} from "redux";
import authenapp from "./authenapp";
import classOwn from './classOwn';
import classList from './classList';
export default combineReducers ({
    authenapp,
    classOwn,
    classList
})