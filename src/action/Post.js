import * as Types from './../constant/Types';
import axios from './../utils/customAxios';

// ------------------------GetPost-----------------------------------------

export const actGetPostRequest = (idclass) => {
    return (dispatch) => {
        return axios.get(`/user/class/${idclass}/post`).then((response) => {
            // console.log(response);
            dispatch(getPost(response));
        });
    };
};

export const getPost = (response) => {
    return {
        type: Types.GET_POST,
        response,
    };
};

// -----------------------UpPost------------------------------------------

export const actUpPostRequest = (content) => {
    return (dispatch) => {
        return axios.post(`user/post`, content).then((response) => {
            // console.log(response);
            dispatch(upPost(response));
        });
    };
};
export const upPost = (response) => {
    return {
        type: Types.UP_POST,
        response,
    };
};
// -----------------------DeletePost------------------------------------------

export const actDeletePostRequest = (idpost) => {
    return (dispatch) => {
        return axios.delete(`user/post/${idpost}`).then((response) => {
            // console.log(response);
            dispatch(deletePost({ response, idpost }));
        });
    };
};
export const deletePost = (response) => {
    return {
        type: Types.DELETE_POST,
        response,
    };
};

// -----------------------EditPost------------------------------------------

export const actEditPostRequest = (datapost) => {
    return (dispatch) => {
        return axios.put(`user/post/${datapost.id}`, datapost.content).then((response) => {
            // console.log(response);
            dispatch(editPost(response));
        });
    };
};
export const editPost = (response) => {
    return {
        type: Types.EDIT_POST,
        response,
    };
};

// --------------------CommentPost---------------------------------------------
export const actCommentPostRequest = (data) => {
    return (dispatch) => {
        return axios.post(`user/comment`, data).then((response) => {
            // console.log(response);
            dispatch(comment(response));
        });
    };
};
export const comment = (response) => {
    return {
        type: Types.COMMENT_POST,
        response,
    };
};