import * as Types from "../constant/Types";
var initialState = {};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.REGISTER_ACCOUNT: {
            
            return state
        };
        case Types.VERIFY_ACCOUNT: {
            console.log(action);
            // console.log(action.dataregister);
            if (action.response.data.success) {
                localStorage.setItem("tk", action.response.data.data.token);
                localStorage.setItem("rtk", action.response.data.data.refreshToken);
            }
            state = action.response.data;
            return state
        };
        case Types.RESET_PASSWORD: {
            // console.log(action.response.data.success);
            if(!action.response.data.success){
                alert(`${action.response.data.message}`);
            }
            return state
        };
        case Types.VERIFY_PASSWORD: {
            // console.log(action.response.data.success);
            if(action.response.data.success){
                localStorage.setItem("tk", action.response.data.data.token);
                localStorage.setItem("rtk", action.response.data.data.refreshToken);
            }
            return state
        };
        case Types.LOGIN: {
            // console.log(action.datalogin);
            if (action.datalogin.success) {
                localStorage.setItem("tk", action.datalogin.data.token);
                localStorage.setItem("rtk", action.datalogin.data.refreshToken);
            }
            state = action.datalogin;
            return state
        }
        case Types.LOGOUT: {
            localStorage.clear();
            state = { data: { token: "" } }
            return state
        }
        default: return state
    }
}

export default myReducer