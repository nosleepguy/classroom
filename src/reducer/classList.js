import * as Types from "../constant/Types";
var initialState = [];

const findIndex = function (arr, id) {
    return arr.findIndex(elem => elem.id == id)
}

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_LIST_CLASS: {
            // console.log(action.response.data.data);
            // console.log(action.response.data.data);
            let data = action.response.data.data
            return data
        }
        case Types.JOIN_CLASS: {
            // console.log(action);
            if (!action.response.data.success) {
                alert(action.response.data.message);
            } else {
                // console.log(action.response);
                window.location.replace("/")
            }
            return state
        }
        case Types.LEAVE_CLASS: {
            // console.log(action);
            const id = action.response.response.idclass;
            const newState = JSON.parse(JSON.stringify(state));
            const index = findIndex(newState, id);
            newState.splice(index, 1);
            state = newState

            return state
        }
        case Types.LOGOUT: {
            state = []
            return state
        }
        default: return state
    }
}

export default myReducer