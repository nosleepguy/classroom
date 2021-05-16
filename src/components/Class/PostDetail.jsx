import React, { useState } from "react";
// import PropTypes from "prop-types";
import "./../../css/postdetail.css";
function PostDetail(props) {
    console.log(props);
    const {datapost} = props;
    const [showAction, setShowAction] = useState(false);
    const onshowAction = ()=>{
        setShowAction(!showAction)
    }
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
                        <span className="fas fa-ellipsis-v hover" onClick={onshowAction}></span>
                        <div className={showAction ? "delete-edit" : "delete-edit hide"}>
                            <p>Xóa</p>
                            <p>Chỉnh sửa</p>
                        </div>
                    </div>
                </div>

                <div className="content">
                    {datapost.content}
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
                    <input type="text" className='input-comment' />
                    <i className="far fa-paper-plane send-comment"></i>
                </div>
            </div>
        </div>
    );
}

// postDetail.propTypes = {};

export default PostDetail;
