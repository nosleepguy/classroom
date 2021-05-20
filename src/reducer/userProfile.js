import * as Types from "../constant/Types";

const initialState = {};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_PROFILE: {
            // console.log(action.response.data.data);
            const userProfile = action.response.data.data
            state = { ...userProfile }
            return state
        }
        case Types.UPDATE_PROFILE: {
            // console.log(action.response.data);
            const userProfile = action.response.data.data
            state = { ...userProfile }
            return state
        }
        default: return state
    }
}
export default myReducer;