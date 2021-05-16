import * as Types from "./../constant/Types";
import axios from "./../utils/customAxios";



export const actRegisterRequest = (dataregister) => {
    return (dispatch) => {
        console.log(dataregister);
        return (
            axios.post("user/register",dataregister).then(response =>{
                dispatch(register(response));
            })
        )
    }
}
export const register = (dataregister) => {
    return {
        type: Types.REGISTER_ACCOUNT,
        dataregister
    }
}
// -----------------------------------------------------------------

export const actLoginRequest = (datalogin) => {
    return (dispatch) => {
        return (
            axios.post("user/login",datalogin).then(response =>{
                dispatch(login(response.data));
            })
        )
    }
}

export const login = (datalogin) => {
    return {
        type: Types.LOGIN,
        datalogin
    }
}
// -----------------------------------------------------------------

export const actCreateClassRequest = (data) => {
    return (dispatch) => {
        return (
            axios.post("user/class",data).then(response =>{
                dispatch(createClass(response.data.data));
            })
        )
    }
}
export const createClass = (response) => {
    return {
        type: Types.CREATE_CLASS,
        response
    }
}
// -----------------------------------------------------------------

export const actJoinClassRequest = (idclass) => {
    return (dispatch) => {
        return (
            axios.post(`user/class/join`, {referralCode: idclass}).then(response =>{
                dispatch(joinClass(response));
            })
        )
    }
}

export const joinClass = (response) => {
    return {
        type: Types.JOIN_CLASS,
        response
    }
}

// -----------------------------------------------------------------

export const actDeleteClassRequest = (idclass) => {
    return (dispatch) => {
        return (
            axios.delete(`user/class/${idclass}`,).then(response =>{
                dispatch(deleteClass({response, idclass}));
            })
        )
    }
}
export const deleteClass = (idclass) => {
    return {
        type: Types.DELETE_CLASS,
        idclass
    }
}
// -----------------------------------------------------------------

export const actLeaveClassRequest = (idclass) => {
    return (dispatch) => {
        return (
            axios.delete(`user/class/${idclass}/leave`,).then(response =>{
                dispatch(leaveClass({response, idclass}));
            })
        )
    }
}

export const leaveClass = (response) => {
    return {
        type: Types.LEAVE_CLASS,
        response
    }
}
// -----------------------------------------------------------------


export const actgetOwnClassRequest = () => {
    return (dispatch) => {
        return (
            axios.get("user/class/own").then((response) => {
                dispatch(getOwnClass(response));
            })
        )
    }
}
export const getOwnClass = (response) => {
    return {
        type: Types.GET_OWN_CLASS,
        response
    }
}
// -----------------------------------------------------------------

export const actgetListClassRequest = () => {
    return (dispatch) => {
        return (
            axios.get("user/class").then((response) => {
                dispatch(getListClass(response));
            })
        )
    }
}
export const getListClass = (response) => {
    return {
        type: Types.GET_LIST_CLASS,
        response
    }
}
// -----------------------------------------------------------------

export const actGetPostRequest = (idclass) => {
    return (dispatch) => {
        return (
            axios.get(`/user/class/${idclass}/post`).then((response) => {
                console.log(response);
                dispatch(getPost(response))
            })
        )
    }
}
export const getPost = (response) => {
    return {
        type: Types.GET_POST,
        response
    }
}


// -----------------------------------------------------------------

// --------- dont use thunk ------------

export const logout = () => {
    return {
        type: Types.LOGOUT,
    }
}


export const detailClass = (detail) => {
    return {
        type: Types.DETAIL_CLASS,
        detail
    }
}