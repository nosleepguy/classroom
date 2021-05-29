import * as Types from '../constant/Types';

const initialState = {};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.DETAIL_CLASS: {
            // console.log(action);
            state = action.detail
            return state
        }
        default:
            return state;
    }
};
export default myReducer;
