import * as Types from './../constant/Types';
import axios from './../utils/customAxios';

// -----------------------GetDocument------------------------------------------

export const actGetDocumentRequest = (idclass) => {
    return (dispatch) => {
        return axios.get(`user/class/${idclass}/document`).then((response) => {
            // console.log(response);
            dispatch(getDocument(response));
        });
    };
};
export const getDocument = (response) => {
    return {
        type: Types.GET_DOCUMENT,
        response,
    };
};
// -----------------------CreateDocument------------------------------------------

export const actCreateDocumentRequest = (datadocument) => {
    return (dispatch) => {
        return axios.post(`user/document`,datadocument).then((response) => {
            // console.log(response);
            dispatch(createDocument(response));
        });
    };
};
export const createDocument = (response) => {
    return {
        type: Types.CREATE_DOCUMENT,
        response,
    };
};
// -----------------------DeleteDocument------------------------------------------

export const actDeleteDocumentRequest = (iddocument) => {
    return (dispatch) => {
        return axios.delete(`user/document/${iddocument}`,).then((response) => {
            // console.log(response);
            dispatch(deleteDocument({response, id: iddocument}));
        });
    };
};
export const deleteDocument = (response) => {
    return {
        type: Types.DELETE_DOCUMENT,
        response,
    };
};

// -----------------------UpdateDocument------------------------------------------

export const actUpdateDocumentRequest = (document) => {
    return (dispatch) => {
        return axios.put(`user/document/${document.id}`,{docName: document.docname}).then((response) => {
            // console.log(response);
            dispatch(updateDocument(response));
        });
    };
};
export const updateDocument = (response) => {
    return {
        type: Types.EDIT_DOCUMENT,
        response,
    };
};

// -----------------------CommentDocument------------------------------------------

export const actCommentDocumentRequest = (documentcomment) => {
    return (dispatch) => {
        return axios.post(`user/comment`,documentcomment).then((response) => {
            // console.log(response);
            dispatch(commentDocument(response));
        });
    };
};
export const commentDocument = (response) => {
    return {
        type: Types.COMMENT_DOCUMENT,
        response,
    };
};

