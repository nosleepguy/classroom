import * as Types from "../constant/Types";

const initialState = [];

const findIndex = function (arr, id){
    return arr.findIndex(elem => elem.id == id)
}

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_POST: {
            console.log(action.response.data.data);
            const dataPost = action.response.data.data;
            state = dataPost;
            return state
        }
        case Types.UP_POST: {
            console.log(action.response.data.data);
            const post = action.response.data.data;
            const newState = JSON.parse(JSON.stringify(state));
            if(newState.length >= 1){
                newState.unshift(post);
            }
            else{
                newState.push(post)
            }
            state = newState;
            return state
        }
        case Types.DELETE_POST: {
            const newState = JSON.parse(JSON.stringify(state));
            // console.log(action);
            const result = action.response.response.data.data;
            const idpost = action.response.idpost;
            if(result){
                let index = findIndex(newState, idpost);
                newState.splice(index, 1);
                state = newState
            }
            return state
        }
        case Types.EDIT_POST: {
            const newState = JSON.parse(JSON.stringify(state));
            // console.log(action);
            const result = action.response.data.success;
            const idpost = action.response.data.data.id;
            const content = action.response.data.data.content;
            if(result){
                let index = findIndex(newState, idpost);
                newState[index].content = content;
                state = newState
            }
            return state
        }
        default: return state
    }
}
export default myReducer;