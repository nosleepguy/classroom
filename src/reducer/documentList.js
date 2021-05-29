import * as Types from '../constant/Types';
import swal from 'sweetalert';

const initialState = [];

const findIndex = function (arr, id) {
    return arr.findIndex((elem) => elem.id == id);
};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_DOCUMENT: {
            // console.log(action.response.data);
            const arrDocument = action.response.data.data;
            state = arrDocument;
            return state;
        }
        case Types.CREATE_DOCUMENT: {
            // console.log(action.response.data.data);
            const createDocument = {
                ...action.response.data.data.document,
                docname: action.response.data.data.document.name,
                documentLinks: [...action.response.data.data.documentLinks]
            }
            const newState = JSON.parse(JSON.stringify(state));
            newState.unshift(createDocument);
            state = newState;
            return state;
        }

        default:
            return state;
    }
};
export default myReducer;
