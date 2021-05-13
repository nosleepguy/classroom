import * as Types from "../constant/Types";
var initialState = [];

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CREATE_CLASS: {
            console.log(action);
            return state
        }
        case Types.GET_ALL_CLASS:{
            // console.log(action.responseData.data.data);
            let classList = action.responseData.data.data;
            console.log(typeof(classList), classList);
            state = [...classList]
            return state
        }
        default: return state
    }
}

export default myReducer