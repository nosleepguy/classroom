import * as Types from "../constant/Types";

const initialState = [];

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_POST: {
            console.log(action.response.data.data);
            const dataPost = action.response.data.data;
            const newState = dataPost;
            return newState
        }
        default: return state
    }
}
export default myReducer;