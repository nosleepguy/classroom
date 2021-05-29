import { combineReducers } from 'redux';
import authenapp from './authenapp';
import classOwn from './classOwn';
import classList from './classList';
import detailClass from './detailClass';
import postList from './postList';
import userProfile from './userProfile';
import memberList from './memberList';
import documentList from './documentList';
export default combineReducers({
    authenapp,
    classOwn,
    classList,
    detailClass,
    postList,
    userProfile,
    memberList,
    documentList,
});
