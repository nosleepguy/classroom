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
// ------------------------GetPost-----------------------------------------

export const actGetPostRequest = (idclass) => {
    return (dispatch) => {
        return axios.get(`/user/class/${idclass}/post`).then((response) => {
            // console.log(response);
            dispatch(getPost(response));
        });
    };
};

export const getPost = (response) => {
    return {
        type: Types.GET_POST,
        response,
    };
};

// -----------------------UpPost------------------------------------------

export const actUpPostRequest = (content) => {
    return (dispatch) => {
        return axios.post(`user/post`, content).then((response) => {
            // console.log(response);
            dispatch(upPost(response));
        });
    };
};
export const upPost = (response) => {
    return {
        type: Types.UP_POST,
        response,
    };
};
// -----------------------DeletePost------------------------------------------

export const actDeletePostRequest = (idpost) => {
    return (dispatch) => {
        return axios.delete(`user/post/${idpost}`).then((response) => {
            // console.log(response);
            dispatch(deletePost({ response, idpost }));
        });
    };
};
export const deletePost = (response) => {
    return {
        type: Types.DELETE_POST,
        response,
    };
};

// -----------------------EditPost------------------------------------------

export const actEditPostRequest = (datapost) => {
    return (dispatch) => {
        return axios.put(`user/post/${datapost.id}`, datapost.content).then((response) => {
            // console.log(response);
            dispatch(editPost(response));
        });
    };
};
export const editPost = (response) => {
    return {
        type: Types.EDIT_POST,
        response,
    };
};

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

// --------------------CommentPost---------------------------------------------
export const actCommentPostRequest = (data) => {
    return (dispatch) => {
        return axios.post(`user/comment`, data).then((response) => {
            // console.log(response);
            dispatch(comment(response));
        });
    };
};
export const comment = (response) => {
    return {
        type: Types.COMMENT_POST,
        response,
    };
};

// ----------------------deleteComment-------------------------------------------
export const actDeleteCommentRequest = (idcomment) => {
    return (dispatch) => {
        return axios.delete(`user/comment/${idcomment}`).then((response) => {
            // console.log(response);
            dispatch(deleteComment({ response, idcomment }));
        });
    };
};
export const deleteComment = (response) => {
    return {
        type: Types.DELETE_COMMENT,
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

// -----------------------------------------------------------------

// --------- dont use thunk ------------

export const logout = () => {
    return {
        type: Types.LOGOUT,
    };
};

// khi click vào lớp ở dashboard thì gửi thông tin class lên để trả về cho detail class
export const detailClass = (detail) => {
    return {
        type: Types.DETAIL_CLASS,
        detail,
    };
};
