import * as Types from '../constant/Types';
import swal from 'sweetalert';

const initialState = [];

const findIndex = function (arr, id) {
    return arr.findIndex((elem) => elem.id == id);
};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_DOCUMENT: {
            const arrDocument = action.response.data.data;
            // console.log(action);
            state = arrDocument;
            return state;
        }
        case Types.CREATE_DOCUMENT: {
            // console.log(action.response.data.data);
            const createDocument = {
                ...action.response.data.data.document,
                docname: action.response.data.data.document.name,
                documentLinks: [...action.response.data.data.documentLinks],
                comments:[]
            }
            // console.log(createDocument);
            const newState = JSON.parse(JSON.stringify(state));
            newState.unshift(createDocument);
            state = newState;
            return state;
        }
        case Types.DELETE_DOCUMENT: {
            // console.log(action.response);
            if(action.response.response.data.success){

                const newState = JSON.parse(JSON.stringify(state));
                const iddocument = action.response.id;
                const index = findIndex(newState, iddocument);
                // console.log(index);
                newState.splice(index, 1);
    
                state = newState;
            }
            return state;
        }
        case Types.EDIT_DOCUMENT: {
            // console.log(action.response);
            if(action.response.data.success){
                const newState = JSON.parse(JSON.stringify(state));
                const iddocument = action.response.data.data.id;
                const index = findIndex(newState, iddocument);
                // console.log(index);
                newState[index].docname = action.response.data.data.name

                state = newState;
            }
            return state;
        }
        case Types.COMMENT_DOCUMENT: {
            console.log(action.response.data.success);
            // console.log(state);
            if(action.response.data.success){
                const newState = JSON.parse(JSON.stringify(state));
                const comment = action.response.data.data;
                const idcomment = action.response.data.data.topicId;

                const index = findIndex(newState, idcomment);
                // console.log(index);
                newState[index]?.comments?.push(comment);
                
                state = newState;
            }
            return state;
        }
        case Types.DELETE_COMMENT: {
            // console.log(action.response);
            // console.log(action.response.data);
            if(action.response.response.data.success){
                const newState = JSON.parse(JSON.stringify(state));
                const idcomment = action.response.idcomment;

                newState.map((item,index1) => {
                    item?.comments?.map((ele,index2) => {
                        if(ele.id === idcomment){
                            // console.log(newState[index1].comments[index2]);
                            newState[index1].comments.splice(index2, 1);
                        }
                    })
                })
                state = newState;
            }
            return state;
        }
        default:
            return state;
    }
};
export default myReducer;
