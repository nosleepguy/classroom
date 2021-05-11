import * as Types from "./../constant/Types";
import callAPI from "./../utils/callAPI";


export const actRegisterRequest = (dataregister) => {
    return (dispatch) => {
        return callAPI("POST", "user/register", dataregister).then((response) => {
            // console.log(response);
            dispatch(register(response.data.data));
        }
        )
    }
}
export const actLoginRequest = (datalogin) => {
    return (dispatch) => {
        return callAPI("POST", "user/login", datalogin).then((response) => {
            console.log(response.data);
            dispatch(register(response.data.data));
        }
        )
    }
}

// export const actCreateClassRequest = (classname) => {
//     return (dispatch) => {
//         return callAPI("POST", "user/class", classname).then((response) => {
//             console.log(response);
//             dispatch(createClass(response));
//         }
//         )
//     }
// }
export const actJoinClassRequest = (classname) => {
    return (dispatch) => {
        return callAPI("POST", "user/class", classname).then((response) => {
            console.log(response);
            dispatch(createClass(response));
        }
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
// export const createClass = (classname) => {
//     return {
//         type: Types.CREATE_CLASS,
//         classname
//     }
// }

export const joinClass = (classname) => {
    return {
        type: Types.CREATE_CLASS,
        classname
    }
}
