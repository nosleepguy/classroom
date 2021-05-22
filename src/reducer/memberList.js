import * as Types from "../constant/Types";
var initialState = [];
const findIndex = function (arr, id) {
    return arr.findIndex(elem => elem.userId == id)
}

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_MEMBER_IN_CLASS: {
            // console.log(action.response);

            const memberList = action.response.data.data;
            state = memberList
            return state
        }
        case Types.DELETE_MEMBER_IN_CLASS: {
            // console.log(state);
            const memberId = action.response.memberId

            const newState = JSON.parse(JSON.stringify(state));
            const index = findIndex(newState, memberId)
            newState.splice(index, 1);
            state = newState;
        }
        default: return state
    }
}
export default myReducer