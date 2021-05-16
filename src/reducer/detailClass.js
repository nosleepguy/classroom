import * as Types from "../constant/Types";

const initialState = {};

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.DETAIL_CLASS: {
            console.log(action);
            return action.detail
        }
        default: return state
    }
}
export default myReducer;