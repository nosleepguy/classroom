import * as Types from "../constant/Types";
var initialState = {};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.REGISTER_ACCOUNT: {
            console.log(action.dataregister);
            localStorage.setItem("token", JSON.stringify(action.dataregister));

            state = action.dataregister;
            return state
        }
        case Types.LOGIN: {
            console.log(action.dataregister);
            localStorage.setItem("token", JSON.stringify(action.dataregister));

            state = action.dataregister;
            return state
        }
        default: return state
    }
}

export default myReducer