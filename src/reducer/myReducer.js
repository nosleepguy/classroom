import {combineReducers} from "redux";
import authenapp from "./authenapp";
import classOwn from './classOwn';
import classList from './classList';
import detailClass from './detailClass';
import postList from './postList';
export default combineReducers ({
    authenapp,
    classOwn,
    classList,
    detailClass,
    postList
})