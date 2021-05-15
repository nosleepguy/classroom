import * as Types from "../constant/Types";
var initialState = {};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.REGISTER_ACCOUNT: {
            console.log(action.dataregister);
            localStorage.setItem("tk", action.dataregister.token);
            localStorage.setItem("rtk", action.dataregister.refreshToken);
            state = action.dataregister;
            return state
        };
        case Types.LOGIN: {
            console.log(action.datalogin);
            localStorage.setItem("tk", action.datalogin.token);
            localStorage.setItem("rtk", action.datalogin.refreshToken);
            state = action.datalogin;
            return state
        }
        case Types.LOGOUT: {
            localStorage.clear();
            state = {token: ""}
            return state
        }
        default: return state
    }
}

export default myReducer