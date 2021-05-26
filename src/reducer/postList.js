import * as Types from '../constant/Types';
import swal from 'sweetalert';

const initialState = [];

const findIndex = function (arr, id) {
    return arr.findIndex((elem) => elem.id == id);
};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_POST: {
            // console.log(action.response.data.data);
            const dataPost = action.response.data.data;
            state = dataPost;
            return state;
        }
        case Types.UP_POST: {
            // console.log(action.response.data);
            const post = action.response.data.data;
            const newState = JSON.parse(JSON.stringify(state)) || [];
            if (newState && newState.length >= 1) {
                newState.unshift(post);
            } else {
                newState.push(post);
            }
            state = newState;
            return state;
        }
        case Types.DELETE_POST: {
            const newState = JSON.parse(JSON.stringify(state));
            // console.log(action);
            const result = action.response.response.data.data;
            const idpost = action.response.idpost;
            if (result) {
                let index = findIndex(newState, idpost);
                newState.splice(index, 1);
                state = newState;
            } else {
                swal({
                    title: 'Oops!',
                    text: `Đã xảy ra lỗi! ${action.response.data.message}`,
                    icon: 'error',
                    buttons: {
                        cancel: true,
                    },
                });
            }
            return state;
        }
        case Types.EDIT_POST: {
            const newState = JSON.parse(JSON.stringify(state));
            // console.log(action);
            const result = action.response.data.success;
            const idpost = action.response.data.data.id;
            const content = action.response.data.data.content;
            if (result) {
                let index = findIndex(newState, idpost);
                newState[index].content = content;
                state = newState;
            }
            return state;
        }
        case Types.COMMENT_POST: {
            const newState = JSON.parse(JSON.stringify(state));
            const post = action.response.data.data;
            const ss = action.response.data.success;
            const idpost = action.response.data.data.topicId;
            // console.log(action.response);
            if (ss) {
                let index = findIndex(newState, idpost);
                // console.log(index);
                // console.log(newState[index].comments);
                if (index != -1) {
                    if (newState[index].comments === undefined) {
                        let comments = [];
                        comments.push(post);
                        // console.log(comments);
                        newState[index] = {
                            ...newState[index],
                            comments,
                        };
                        // console.log(comments);
                    } else {
                        newState[index].comments?.push(post);
                        // console.log(newState[index].comments);
                        // console.log(newState);
                    }
                }
            }
            state = newState;

            return state;
        }
        case Types.DELETE_COMMENT: {
            const newState = JSON.parse(JSON.stringify(state));
            const idpost = action.response.idcomment;

            newState.map((post, indexpost) => {
                post.comments?.map((comment, indexcomment) => {
                    if (comment.id === idpost) {
                        newState[indexpost].comments.splice(indexcomment, 1);
                    }
                });
            });
            state = newState;

            return state;
        }
        default:
            return state;
    }
};
export default myReducer;
