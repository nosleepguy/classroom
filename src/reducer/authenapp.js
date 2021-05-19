import * as Types from "../constant/Types";
var initialState = {};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.REGISTER_ACCOUNT: {
            console.log(action);
            console.log(action.dataregister);
            if (action.dataregister.data.success) {
                localStorage.setItem("tk", action.dataregister.data.data.token);
                localStorage.setItem("rtk", action.dataregister.data.data.refreshToken);
            }
            state = action.dataregister.data;
            return state
        };
        case Types.LOGIN: {
            console.log(action.datalogin);
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