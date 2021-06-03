import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./../../../css/documentDetail.css";
import PreviewLink from "./PreviewLink";
import refreshToken from "./../../../utils/checkToken";
import Comment from './../Comment';
import { actCommentDocumentRequest, actDeleteDocumentRequest } from "../../../action/Document";

function DocumentDetail(props) {
    const {
        datadocument,
        userProfile,
        detailclass,
        onDeleteDocument,
        onEditDocument,
        onCommentDocument
    } = props;
    // console.log(datadocument);

    const month = datadocument.createdAt.slice(5, 7);
    const day = datadocument.createdAt.slice(8, 10);

    const [comment, setComment] = useState("");
    const [showAction, setShowAction] = useState(false);
    const [showFormEdit, setShowFormEdit] = useState(false);
    const [valueFormEdit, setValueFormEdit] = useState("");

    const onshowAction = () => {
        setShowAction(!showAction);
    };
    const onShowFormEdit = () => {
        setShowFormEdit(!showFormEdit);
        setShowAction(false);
    };
    const onHandleEditPost = () => {
        refreshToken([
            onEditDocument({
                id: datadocument.id,
                docname: valueFormEdit,
            }),
        ]);
        setShowFormEdit(false);
    };
    const onHandleDocumentComment = () => {
        refreshToken([onCommentDocument({
            topicId: datadocument.id,
            typeComment: 2,
            content: comment
        })]);
        setComment("");

    }
    const onhandleSubmit = (event) => {
        event.preventDefault();
    }
    useEffect(() => {
        setValueFormEdit(datadocument.docname);
    }, [datadocument]);

    return (
        <div className="new-noti">
            <div className="owner-noti">
                <div className="owner-info document-header">
                    <div
                        className="avatar"
                        style={{
                            background: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX////0myXzlQD0miD1pT/++O/zkwD86dTzlgn0nCX72br0nij0mRP85dH2rVf1qEb97t33unj61Kz++/X1ojn+9Or85Mv4vn/60qj2sF/869j5y5v738P4xIv3tmz5z6L5yJX2r131qU762bX3t3AjskLOAAAE00lEQVR4nO2d7XaiMBRFIdGYSmpt0Wm1Sh067/+MM+UjVgG1yxMSmLN/qguzBa7k5sKNIkIIIYQQQgghhBBCCCFumLog9W31HaOECyavn1PfahWJjF0gjRbZ1rdcgSPDwlJlIRyuDg3j2Jhfvv0cG/7bjS++BR0bxrF/xcTg0Upp+8OpAA5UPOnybSFqRxHK3waaWWJKQ7PxPRRnbHR1nO58j8QZm3Ivytz3QNwxKc9FtfQ9EGdsVWGo330PxB1ZsRPlwvc43LErg430PQ53pKWhCuEK3BGjDzXRqlBUYcwUnVD+X6iZ73G4w7vhu1EQzOS5/dLMt+FGoaaB0qikbSbo1zCdGJRgISmemvMkr4ZLiZ7eS9mImT4NdwKfv5BiHY7hB+wUPFFMgjF8PRMUdwbTOi+j94EY/tb1j14JztK7WM9XVdRSp8epJ8NpPZzYTFbluO6/cFyU2zSnO9GP4dbUMUb/ri8cAZfG5Zbk6uRFL4ZzG0TVa50RRhjuRMth6sPw3cYY9RYhDau5oDjJAHswfK4FZTkUnGFUHfnz76/1bpgu6iBqkvJoAho+BGC4rvPQsc6rxMK4DGc2iKrn+rVRGX4qK3hMYI7J8GBjzPeFhBEZZqIWjL/rjMYwzesgqicnycuxGK4f7HpldvrOSAx/2UVndTh7axyGL8cY83n+3igM91bQNHPPYzC0QdSsWmoGhm94TBnq1oqBwRsubRD9mgy2MHTD3fFCraM2aeCGbzbG6K7KpGEb2pRhPRlsYdCGG3uhtuheZR6w4TFleJwMtjBgw8wKflz62IANq8JReaWqbMiGpeDDlbEP3jC5VskydEM5ufoxGt4ODdH8v4bZ6eItsPAsFMPnthITGt4EDdHQcLyGf5RuMipDd9AQDQ3x0BANDfHQEA0N8dAQDQ3x0BANDfHQEA0N8dAQDQ3x0BANDfEEY/iSLe5n0/LImVAMMyURiKdQDXeoO5xFo9QqEMODvjDqnyCz800HYviBMjSNesBADNe2avhO1GOghtFOQJ46W9xiG6ZhlD4iaLmxIRhDZ9AQDQ3x0BANDfHQEA0N8dAQDQ3xhGOYOupCEorhOr/z0Wwlk+ZNqYEYpgYzx5fNottADF9geZr9+aYDMTygnugZbK5tjsqX6kOghlGuISeikY1wGophtJctxfo/xfxppqKCMXQGDdHQEA8N0dAQDw3R0BAPDdHQEE+bYVLmPEZsuC2YOemG1Gn4sXi6n/zQHHSboUu6DBeYqi993uchGENY1VezXVwghj1Xfbmkw/ANlk1sPGkyEMMpqL2MbHYaC8Qw2iaIqi9lmo+BC8Uwipaz+2lrFReOoStoiIaGeGiIhoZ4aIiGhnhoiIaGeGiIhoZ4aIiGhnh6N/zKqZ31PXWL9GEYy76+LoqmVR/Sy70YgOSFoejqL4OnqlztryNn+bzg/k7EtCpcFU5W0tqYl626zKafb1yvqo4heS9f90VaNSMz8v0RkAK+zG5vW49f7PmCZW9bBQGy+FfQtrZa9ycYpRJ05/1P6GoN5oYZajH0dvSlxksOmKOen3Cz4KJfwSjaatR66C3IjvZ8Tkn3AlOaf13PqLzXHvGW6edG9BBMxerQtqTYF4ib1X5+KxshhBBCCCGEEEIIIYSQe/gLEeV5y4CZvuUAAAAASUVORK5CYII=)`,
                        }}
                    ></div>
                    <div className="owner owner-document">
                        <p className="content-document">
                            {datadocument.docname}
                        </p>
                        <p className="document-info">
                            Giáo viên đã đăng &ensp;• &ensp;ngày {day} tháng{" "}
                            {month}{" "}
                        </p>
                    </div>
                    <div
                        className={
                            userProfile.id === detailclass.ownerId
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
                                    refreshToken([
                                        onDeleteDocument(datadocument.id),
                                    ])
                                }
                            >
                                Xóa
                            </p>
                            <p onClick={onShowFormEdit}>Chỉnh sửa</p>
                        </div>
                    </div>
                </div>

                <div className="content document-content">
                    <PreviewLink links={datadocument.documentLinks} />
                </div>
            </div>

            {/* form edit bài đăng */}
            <div
                className="form-edit"
                style={showFormEdit ? { display: "flex" } : { display: "none" }}
            >
                <div className="write-noti">
                    <form onSubmit={onhandleSubmit}>
                        <div className="inputedit">
                            <input
                            className="input-edit-document"
                                type="text"
                                value={valueFormEdit}
                                onChange={(e) =>
                                    setValueFormEdit(e.target.value)
                                }
                            />
                        </div>
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
                    {datadocument?.comments?.length} nhận xét về tài liệu
                </div>
                {datadocument.comments?.map((comment) => {

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
                        onClick={onHandleDocumentComment}
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
        detailclass: state.detailClass,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteDocument: (iddocument) => {
            dispatch(actDeleteDocumentRequest(iddocument));
        },
        onEditDocument: (data) => {
            dispatch(actUpdateDocumentRequest(data));
        },
        onCommentDocument: (comment) => {
            dispatch(actCommentDocumentRequest(comment))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DocumentDetail);
