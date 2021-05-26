import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
    actDeletePostRequest,
    actEditPostRequest,
    actCommentPostRequest,
    actDeleteCommentRequest,
} from "./../../action/Action";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// import PropTypes from "prop-types";
import "./../../css/postdetail.css";
import refreshToken from "./../../utils/checkToken";
import Comment from "./Comment";
function PostDetail(props) {
    const { datapost, onDeletePost, onEditPost, onCommentPost, userProfile } =
        props;
    // console.log(datapost);

    // console.log(datapost.createdAt.slice(5,7), datapost.createdAt.slice(8,10));
    const month = datapost.createdAt.slice(5, 7);
    const day = datapost.createdAt.slice(8, 10);

    const [showAction, setShowAction] = useState(false);

    const [comment, setComment] = useState("");

    //show form edit
    const [showFormEdit, setShowFormEdit] = useState(false);
    const [valueFormEdit, setValueFormEdit] = useState("");

    useEffect(() => {
        setValueFormEdit(datapost.content);
    }, [datapost]);

    const onshowAction = () => {
        setShowAction(!showAction);
    };

    const onShowFormEdit = () => {
        setShowFormEdit(!showFormEdit);
        setShowAction(false);
    };

    const onHandleEditPost = () => {
        const dataEdit = {
            id: datapost.id,
            content: { content: valueFormEdit },
        };
        refreshToken([onEditPost(dataEdit)]);
        setShowFormEdit(!showFormEdit);
    };

    const onHandlePostComment = () => {
        const dataComment = {
            topicId: datapost.id,
            content: comment,
            typeComment: 1,
        };
        refreshToken([onCommentPost(dataComment)]);
        setComment("");
    };
    return (
        <div className="new-noti">
            <div className="owner-noti">
                <div className="owner-info">
                    <div
                        className="avatar"
                        style={{
                            background: `url(${datapost.ownerAvatar || userProfile.avatar})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                    <div className="owner">
                        <p>
                            {datapost.ownerName
                                ? datapost.ownerName
                                : userProfile.username}
                        </p>
                        <p>
                            {day} thg {month}
                        </p>
                    </div>
                    <div
                        className={
                            userProfile.id === datapost.ownerId
                                ? "action"
                                : "action hide"
                        }
                    >
                        <span
                            className="fas fa-ellipsis-v hover"
                            onClick={onshowAction}
                        ></span>
                        <div
                            className={
                                showAction ? "delete-edit" : "delete-edit hide"
                            }
                        >
                            <p
                                onClick={() =>
                                    refreshToken([onDeletePost(datapost.id)])
                                }
                            >
                                Xóa
                            </p>
                            <p onClick={onShowFormEdit}>Chỉnh sửa</p>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div
                        dangerouslySetInnerHTML={{ __html: datapost.content }}
                    />
                </div>
            </div>

            {/* form edit bài đăng */}
            <div
                className="form-edit"
                style={showFormEdit ? { display: "flex" } : { display: "none" }}
            >
                <div className="write-noti">
                    <form>
                        <CKEditor
                            editor={ClassicEditor}
                            data={valueFormEdit}
                            onReady={(editor) => {
                                // You can store the "editor" and use when it is needed.
                                // console.log( 'Editor is ready to use!', editor );
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setValueFormEdit(data);
                                // console.log(data);

                                // console.log( { event, editor, data } );
                            }}
                            onBlur={(event, editor) => {
                                // console.log( 'Blur.', editor );
                            }}
                            onFocus={(event, editor) => {
                                // console.log( 'Focus.', editor );
                            }}
                        />
                        <div className="btn">
                            <button type="button" onClick={onShowFormEdit}>
                                Hủy
                            </button>
                            <button
                                type="button"
                                onClick={onHandleEditPost}
                                style={
                                    valueFormEdit
                                        ? {
                                              background: "#2C7EEA",
                                              color: "white",
                                          }
                                        : {}
                                }
                            >
                                Cập nhật
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="comment">
                <div className="count-comment">
                    <span className="fas fa-user-friends"></span>&ensp;{" "}
                    {datapost?.comments?.length} nhận xét về bài viết
                </div>
                {datapost.comments?.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
            </div>
            <div className="write-comment">
                <div
                    className="avatar"
                    style={
                        userProfile.avatar
                            ? {
                                  background: `url(${userProfile.avatar})`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                              }
                            : {}
                    }
                ></div>
                <div className="type-comment">
                    <input
                        type="text"
                        className="input-comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <i
                        className="far fa-paper-plane send-comment"
                        onClick={onHandlePostComment}
                    ></i>
                </div>
            </div>
        </div>
    );
}

// postDetail.propTypes = {};
const mapStateToProps = (state) => {
    return {
        userProfile: state.userProfile,
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeletePost: (idpost) => {
            dispatch(actDeletePostRequest(idpost));
        },
        onEditPost: (dataEdit) => {
            dispatch(actEditPostRequest(dataEdit));
        },
        onCommentPost: (dataComment) => {
            dispatch(actCommentPostRequest(dataComment));
        },
        onDeleteComment: (idcomment) => {
            dispatch(actDeleteCommentRequest(idcomment));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
