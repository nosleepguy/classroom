import * as Types from './../constant/Types';
import axios from './../utils/customAxios';

// ----------------------GetProfile-------------------------------------------

export const actGetProfileRequest = () => {
    return (dispatch) => {
        return axios.get(`user`).then((response) => {
            // console.log(response);
            dispatch(getProfile(response));
        });
    };
};
export const getProfile = (response) => {
    return {
        type: Types.GET_PROFILE,
        response,
    };
};

// --------------------UpdateProfile---------------------------------------------
export const actUpdateProfileRequest = (dataUser) => {
    return (dispatch) => {
        return axios.put(`user`, dataUser).then((response) => {
            // console.log(response);
            dispatch(updateProfile(response));
        });
    };
};
export const updateProfile = (response) => {
    return {
        type: Types.UPDATE_PROFILE,
        response,
    };
};
