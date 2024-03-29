import React, { useState } from "react";
import { connect } from "react-redux";
import { actDeleteCommentRequest } from "../../action/DeleteComment";
import refreshToken from "./../../utils/checkToken";
function Comment(props) {
    const { userProfile, onDeleteComment, comment } = props;

    // console.log(comment);

    const [showActDelComment, setShowActDelComment] = useState(false);

    const month = comment.createdAt.slice(5, 7);
    const day = comment.createdAt.slice(8, 10);

    return (
        <div className="user-comment">
            <div
                className="avatar-user"
                style={{
                    background: `url(${comment.ownerAvatar || userProfile.avatar})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>
            <div className="detail-comment">
                <div className="detail-user-comment">
                    <span className="name-user">
                        {comment.ownerName
                            ? comment.ownerName
                            : userProfile.username}
                    </span>
                    <span className="date">
                        {day} thg {month}
                    </span>
                </div>
                <div className="comment-content">{comment.content}</div>
                <div
                    className={
                        userProfile?.id == comment?.ownerId
                            ? "action"
                            : "action hide"
                    }
                    onClick={() => setShowActDelComment(!showActDelComment)}
                >
                    <span className="fas fa-ellipsis-v hover"></span>
                    <div
                        className={
                            showActDelComment ? "delete hover" : "delete hide"
                        }
                    >
                        <p
                            onClick={() =>
                                refreshToken([onDeleteComment(comment.id)])
                            }
                        >
                            Xóa
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        userProfile: state.userProfile,
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteComment: (idcomment) => {
            dispatch(actDeleteCommentRequest(idcomment));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Comment);
