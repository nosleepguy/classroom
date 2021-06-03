import * as Types from '../constant/Types';
import axios from '../utils/customAxios';

// ----------------------deleteComment-------------------------------------------
export const actDeleteCommentRequest = (idcomment) => {
    return (dispatch) => {
        return axios.delete(`user/comment/${idcomment}`).then((response) => {
            // console.log(response);
            dispatch(deleteComment({ response, idcomment }));
        });
    };
};
export const deleteComment = (response) => {
    return {
        type: Types.DELETE_COMMENT,
        response,
    };
};

// -----------------------------------------------------------------
