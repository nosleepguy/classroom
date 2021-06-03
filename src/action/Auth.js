import * as Types from './../constant/Types';
import axios from './../utils/customAxios';

export const actRegisterRequest = (dataregister) => {
    return (dispatch) => {
        // console.log(dataregister);
        return axios.post('user/register', dataregister).then((response) => {
            dispatch(register(response));
        });
    };
};
export const register = (response) => {
    return {
        type: Types.REGISTER_ACCOUNT,
        response,
    };
};
// -----------------VerifyEmail------------------------------------------------
export const actVerifyEmailRequest = (data) => {
    return (dispatch) => {
        return axios.post(`user/verify-email`, data).then((response) => {
            console.log(response);
            dispatch(verifyEmail(response));
        });
    };
};
export const verifyEmail = (response) => {
    return {
        type: Types.VERIFY_ACCOUNT,
        response,
    };
};
// ---------------------ResetPassWord--------------------------------------------
export const actResetPassWordRequest = (email) => {
    return (dispatch) => {
        return axios.post(`user/reset-password`, email).then((response) => {
            // console.log(response);
            dispatch(resetPassWord(response));
        });
    };
};
export const resetPassWord = (response) => {
    return {
        type: Types.RESET_PASSWORD,
        response,
    };
};
// ---------------------ResetPassWord--------------------------------------------
export const actVerifyPassWordRequest = (data) => {
    return (dispatch) => {
        return axios.post(`user/verify-reset-password`, data).then((response) => {
            // console.log(response);
            dispatch(verifyPassWord(response));
        });
    };
};
export const verifyPassWord = (response) => {
    return {
        type: Types.VERIFY_PASSWORD,
        response,
    };
};

// --------------------Login---------------------------------------------

export const actLoginRequest = (datalogin) => {
    return (dispatch) => {
        return axios.post('user/login', datalogin).then((response) => {
            dispatch(login(response.data));
        });
    };
};

export const login = (datalogin) => {
    return {
        type: Types.LOGIN,
        datalogin,
    };
};

// --------- dont use thunk ------------

export const logout = () => {
    return {
        type: Types.LOGOUT,
    };
};
