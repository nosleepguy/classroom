import * as Types from '../constant/Types';
var initialState = [];

const findIndex = function (arr, id) {
    return arr.findIndex((elem) => elem.id == id);
};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CREATE_CLASS: {
            // console.log(action);
            let newState = JSON.parse(JSON.stringify(state));
            const newclass = { ...action.response };
            // console.log(newclass);
            newState.push(newclass);
            state = newState;
            return state;
        }
        case Types.GET_OWN_CLASS: {
            // console.log(action.response.data.data);
            let classOwn = action.response.data.data;
            // console.log(classOwn);
            let newState = [...state, ...classOwn];
            state = newState;
            return state;
        }
        case Types.DELETE_CLASS: {
            // console.log(action);
            const id = action.idclass.idclass;
            if (action.idclass.response.data.success) {
                const index = findIndex(state, id);
                let newState = JSON.parse(JSON.stringify(state));
                newState.splice(index, 1);
                state = newState;
            }
            return state;
        }
        case Types.UPDATE_CLASSNAME: {
            // console.log(action);
            const id = action.response.data.data.id;
            const classname = action.response.data.data.name;
            // console.log(id, state);
            const newState = JSON.parse(JSON.stringify(state));
            const index = findIndex(newState, id);
            newState[index].className = classname;
            state = newState;

            return state;
        }
        case Types.LOGOUT: {
            state = [];
            return state;
        }
        default:
            return state;
    }
};

export default myReducer;
