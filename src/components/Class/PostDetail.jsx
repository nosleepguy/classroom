import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { actDeletePostRequest, actEditPostRequest } from "../../action/Action";
// import PropTypes from "prop-types";
import "./../../css/postdetail.css";
import refreshToken from "./../../utils/checkToken";
function PostDetail(props) {
    const { datapost, onDeletePost, onEditPost } = props;
    const [showAction, setShowAction] = useState(false);

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

    return (
        <div className="new-noti">
            <div className="owner-noti">
                <div className="owner-info">
                    <div className="avatar"></div>
                    <div className="owner">
                        <p>Ngô Trường Giang</p>
                        <p> 27 thg 4</p>
                    </div>
                    <div className="action">
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

                <div className="content">{datapost.content}</div>
            </div>

            {/* form edit bài đăng */}
            <div
                className="form-edit"
                style={showFormEdit ? { display: "flex" } : { display: "none" }}
            >
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
                    <span className="fas fa-user-friends"></span>&ensp; 4 nhận
                    xét về lớp học
                </div>
                <div className="user-comment">
                    <div className="avatar-user"></div>
                    <div className="detail-comment">
                        <div className="detail-user-comment">
                            <span className="name-user">NGuyễn Mạnh Hùng</span>
                            <span className="date">4 thg 5</span>
                        </div>
                        <div className="comment-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum fugiat necessitatibus enim, molestias
                            culpa voluptate itaque deleniti officia. Omnis,
                            cupiditate.
                        </div>
                        <div className="action">
                            <span className="fas fa-ellipsis-v hover"></span>
                            <div className="delete hide">
                                <p>Xóa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="write-comment">
                <div className="avatar"></div>
                <div className="type-comment">
                    <input type="text" className="input-comment" />
                    <i className="far fa-paper-plane send-comment"></i>
                </div>
            </div>
        </div>
    );
}

// postDetail.propTypes = {};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeletePost: (idpost) => {
            dispatch(actDeletePostRequest(idpost));
        },
        onEditPost: (dataEdit) => {
            dispatch(actEditPostRequest(dataEdit));
        },
    };
};
export default connect(null, mapDispatchToProps)(PostDetail);
