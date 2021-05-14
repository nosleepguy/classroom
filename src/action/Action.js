import * as Types from "./../constant/Types";
// import callAPI from "./../utils/callAPI";
import axios from "./../utils/customAxios";


// export const actRegisterRequest = (dataregister) => {
//     return (dispatch) => {
//         return callAPI("POST", "user/register", dataregister).then((response) => {
//             // console.log(response);
//             dispatch(register(response.data.data));
//         }
//         )
//     }
// }

// axios.post('/postData', {
//     name: 'Sample',
//     contact: '0123456789'
// }).then(response => console.log(response))
// .catch(error => console.log(error));

//test axios interceptors
export const actLoginRequest = (datalogin) => {
    return (dispatch) => {
        return (
            axios.post("user/login",datalogin).then(response =>{
                dispatch(login(response.data.data));
            })
        )
    }
}
// export const actLoginRequest = (datalogin) => {
//     return (dispatch) => {
//         return callAPI("POST", "user/login", datalogin).then((response) => {
//             console.log(response.data);
//             dispatch(login(response.data.data));
//         }
//         )
//     }
// }

// export const actCreateClassRequest = (classname) => {
//     return (dispatch) => {
//         return callAPI("POST", "user/class", classname).then((response) => {
//             console.log(response);
//             dispatch(createClass(response));
//         }
//         )
//     }
// }
// export const actJoinClassRequest = (classname) => {
//     return (dispatch) => {
//         return callAPI("POST", "user/class", classname).then((response) => {
//             console.log(response);
//             dispatch(createClass(response));
//         }
//         )
//     }
// }

export const actGetAllClassRequest = () => {
    return (dispatch) => {
        return (
            axios.get("user/class/own").then((response) => {
                console.log(response);
                dispatch(getAllClass(response));
            })
        )
    }
}
// export const actGetAllClassRequest = () => {
//     return (dispatch) => {
//         return callAPI("GET", "user/class/own",).then((response) => {
//             console.log(response);
//             dispatch(getAllClass(response));
//         })
//     }
// }



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

export const createClass = (classname) => {
    return {
        type: Types.CREATE_CLASS,
        classname
    }
}

export const joinClass = (classname) => {
    return {
        type: Types.CREATE_CLASS,
        classname
    }
}
export const getAllClass = (responseData) => {
    return {
        type: Types.GET_ALL_CLASS,
        responseData
    }
}
export const changeToken = (newToken) => {
    return {
        type: Types.CHANGE_TOKEN,
        newToken
    }
}
