import * as Types from './../constant/Types';
import axios from './../utils/customAxios';

// --------------------CreateClass---------------------------------------------

export const actCreateClassRequest = (data) => {
    return (dispatch) => {
        return axios.post('user/class', data).then((response) => {
            dispatch(createClass(response.data.data));
        });
    };
};
export const createClass = (response) => {
    return {
        type: Types.CREATE_CLASS,
        response,
    };
};
// --------------------JoinClass---------------------------------------------

export const actJoinClassRequest = (idclass) => {
    return (dispatch) => {
        return axios.post(`user/class/join`, { referralCode: idclass }).then((response) => {
            dispatch(joinClass(response));
        });
    };
};

export const joinClass = (response) => {
    return {
        type: Types.JOIN_CLASS,
        response,
    };
};

// -----------------------DeleteClass------------------------------------------

export const actDeleteClassRequest = (idclass) => {
    return (dispatch) => {
        return axios.delete(`user/class/${idclass}`).then((response) => {
            dispatch(deleteClass({ response, idclass }));
        });
    };
};
export const deleteClass = (idclass) => {
    return {
        type: Types.DELETE_CLASS,
        idclass,
    };
};
// --------------------LeaveClass---------------------------------------------

export const actLeaveClassRequest = (idclass) => {
    return (dispatch) => {
        return axios.delete(`user/class/${idclass}/leave`).then((response) => {
            dispatch(leaveClass({ response, idclass }));
        });
    };
};

export const leaveClass = (response) => {
    return {
        type: Types.LEAVE_CLASS,
        response,
    };
};
// --------------------getOwnClass---------------------------------------------

export const actgetOwnClassRequest = () => {
    return (dispatch) => {
        return axios.get('user/class/own').then((response) => {
            dispatch(getOwnClass(response));
        });
    };
};
export const getOwnClass = (response) => {
    return {
        type: Types.GET_OWN_CLASS,
        response,
    };
};
// ---------------------getListClass--------------------------------------------

export const actgetListClassRequest = () => {
    return (dispatch) => {
        return axios.get('user/class').then((response) => {
            dispatch(getListClass(response));
        });
    };
};
export const getListClass = (response) => {
    return {
        type: Types.GET_LIST_CLASS,
        response,
    };
};

// ------------------------GetUserInClass-----------------------------------------
export const actGetUserInClassRequest = (classId) => {
    return (dispatch) => {
        return axios.get(`user/class/members?classId=${classId}`).then((response) => {
            // console.log(response);
            dispatch(getUserInClass(response));
        });
    };
};
export const getUserInClass = (response) => {
    return {
        type: Types.GET_MEMBER_IN_CLASS,
        response,
    };
};

// --------------------DeleteUserInClass---------------------------------------------
export const actDeleteUserInClassRequest = (data) => {
    return (dispatch) => {
        const memberId = data.memberId;
        return axios.delete(`user/class/${data.classId}/member/${memberId}`).then((response) => {
            // console.log(response);
            dispatch(deleteUserInClass({ response, memberId }));
        });
    };
};
export const deleteUserInClass = (response) => {
    return {
        type: Types.DELETE_MEMBER_IN_CLASS,
        response,
    };
};

// -----------------UpdateClassName------------------------------------------------
export const actUpdateClassNameRequest = (data) => {
    return (dispatch) => {
        return axios.put(`user/class/${data.id}`, data.name).then((response) => {
            // console.log(response);
            dispatch(updateClassName(response));
        });
    };
};
export const updateClassName = (response) => {
    return {
        type: Types.UPDATE_CLASSNAME,
        response,
    };
};

// --------- dont use thunk ------------

// khi click vào lớp ở dashboard thì gửi thông tin class lên để trả về cho detail class
export const detailClass = (detail) => {
    return {
        type: Types.DETAIL_CLASS,
        detail,
    };
};
