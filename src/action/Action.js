import * as Types from "./../constant/Types";
import axios from "./../utils/customAxios";

export const actRegisterRequest = (dataregister) => {
    return (dispatch) => {
        console.log(dataregister);
        return (
            axios.post("user/register",dataregister).then(response =>{
                console.log(response);
                dispatch(register(response));
            })
        )
    }
}

export const actLoginRequest = (datalogin) => {
    return (dispatch) => {
        return (
            axios.post("user/login",datalogin).then(response =>{
                console.log(response);
                dispatch(login(response.data));
            })
        )
    }
}

export const actCreateClassRequest = (data) => {
    return (dispatch) => {
        return (
            axios.post("user/class",data).then(response =>{
                console.log(response);
                dispatch(createClass(response.data.data));
            })
        )
    }
}

export const actgetOwnClassRequest = () => {
    return (dispatch) => {
        return (
            axios.get("user/class/own").then((response) => {
                console.log(response);
                dispatch(getOwnClass(response));
            })
        )
    }
}
export const actgetListClassRequest = () => {
    return (dispatch) => {
        return (
            axios.get("user/class").then((response) => {
                console.log(response);
                dispatch(getListClass(response));
            })
        )
    }
}

export const actDeleteClassRequest = (idclass) => {
    return (dispatch) => {
        return (
            axios.delete(`user/class/${idclass}`,).then(response =>{
                console.log(response);
                dispatch(deleteClass({response, idclass}));
            })
        )
    }
}
export const actJoinClassRequest = (idclass) => {
    return (dispatch) => {
        return (
            axios.post(`user/class/join`, {referralCode: idclass}).then(response =>{
                console.log(response);
                dispatch(joinClass(response));
            })
        )
    }
}
export const actLeaveClassRequest = (idclass) => {
    return (dispatch) => {
        return (
            axios.delete(`user/class/${idclass}/leave`,).then(response =>{
                console.log(response);
                dispatch(leaveClass({response, idclass}));
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
export const login = (datalogin) => {
    return {
        type: Types.LOGIN,
        datalogin
    }
}

export const logout = () => {
    return {
        type: Types.LOGOUT,
    }
}

export const createClass = (response) => {
    return {
        type: Types.CREATE_CLASS,
        response
    }
}

export const joinClass = (response) => {
    return {
        type: Types.JOIN_CLASS,
        response
    }
}
export const leaveClass = (response) => {
    return {
        type: Types.LEAVE_CLASS,
        response
    }
}
export const deleteClass = (idclass) => {
    return {
        type: Types.DELETE_CLASS,
        idclass
    }
}

export const getOwnClass = (response) => {
    return {
        type: Types.GET_OWN_CLASS,
        response
    }
}
export const getListClass = (response) => {
    return {
        type: Types.GET_LIST_CLASS,
        response
    }
}
