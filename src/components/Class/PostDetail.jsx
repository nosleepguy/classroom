import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
    actDeletePostRequest,
    actEditPostRequest,
    actCommentPostRequest,
    actDeleteCommentRequest,
} from './../../action/Action';

// import PropTypes from "prop-types";
import './../../css/postdetail.css';
import refreshToken from './../../utils/checkToken';
import Comment from './Comment';
function PostDetail(props) {
    const { datapost, onDeletePost, onEditPost, onCommentPost, userProfile } = props;
    // console.log(userProfile, datapost);

    // console.log(datapost.createdAt.slice(5,7), datapost.createdAt.slice(8,10));
    const month = datapost.createdAt.slice(5, 7);
    const day = datapost.createdAt.slice(8, 10);

    const [showAction, setShowAction] = useState(false);

    const [comment, setComment] = useState('');

    //show form edit
    const [showFormEdit, setShowFormEdit] = useState(false);
    const [valueFormEdit, setValueFormEdit] = useState('');

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
        setComment('');
    };
    return (
        <div className="new-noti">
            <div className="owner-noti">
                <div className="owner-info">
                    <div className="avatar"></div>
                    <div className="owner">
                        <p>{datapost.ownerName ? datapost.ownerName : userProfile.username}</p>
                        <p>
                            {day} thg {month}
                        </p>
                    </div>
                    <div className={userProfile.id === datapost.ownerId ? 'action' : 'action hide'}>
                        <span className="fas fa-ellipsis-v hover" onClick={onshowAction}></span>
                        <div className={showAction ? 'delete-edit' : 'delete-edit hide'}>
                            <p onClick={() => refreshToken([onDeletePost(datapost.id)])}>Xóa</p>
                            <p onClick={onShowFormEdit}>Chỉnh sửa</p>
                        </div>
                    </div>
                </div>

                <div className="content">{datapost.content}</div>
            </div>

            {/* form edit bài đăng */}
            <div className="form-edit" style={showFormEdit ? { display: 'flex' } : { display: 'none' }}>
                <div className="write-noti">
                    <p>Chỉnh sửa bài viết của bạn</p>
                    <form>
                        <textarea
                            cols="30"
                            rows="10"
                            value={valueFormEdit}
                            onChange={(e) => setValueFormEdit(e.target.value)}
                        ></textarea>
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
                                              background: '#2C7EEA',
                                              color: 'white',
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
                    <span className="fas fa-user-friends"></span>&ensp; {datapost?.comments?.length} nhận xét về bài
                    viết
                </div>
                {datapost.comments?.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
            </div>
            <div className="write-comment">
                <div className="avatar"></div>
                <div className="type-comment">
                    <input
                        type="text"
                        className="input-comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <i className="far fa-paper-plane send-comment" onClick={onHandlePostComment}></i>
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
