import * as Types from "../constant/Types";
var initialState = {};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CREATE_CLASS: {
            console.log(action);
            return state
        }

        default: return state
    }
}

export default myReducer