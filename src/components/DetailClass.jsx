import React, { useState } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

import "./../css/detailclass.css";
import CreateNoti from "./CreateNoti";

function DetailClass(props) {
    const idclass = props.match.params.id; 
    const {classOwn} = props;
    
    const index = classOwn.findIndex(item => item.id === +idclass);

    const [showCreateNoti, setShowCreateNoti] = useState(false);
    const onShowCreateNoti = () => {
        setShowCreateNoti(!showCreateNoti);
    };

    return (
        <section className="insideclass">
            <div className="main">
                <div className="classname">
                    <p>Đồ họa máy tính</p>
                    {/* <p>(60th4)</p> */}
                    <p>Mã lớp: {classOwn[index].referralCode}</p>
                </div>
                <div className="detail">
                    <div className="newfeed">
                        <CreateNoti
                            showCreateNoti={showCreateNoti}
                            onShowCreateNotiEvent={onShowCreateNoti}
                        />
                        <div
                            className="create-noti"
                            style={
                                showCreateNoti
                                    ? { display: "none" }
                                    : { display: "flex" }
                            }
                            onClick={onShowCreateNoti}
                        >
                            <div className="avatar-user"></div>
                            <p>Tạo thông báo mới cho lớp học của bạn</p>
                        </div>
                        <div className="new-noti">
                            <div className="avatar-user"></div>
                            <div>
                                <p>
                                    Ngô Trường Giang đã đăng 1 tài liệu mới:
                                    Slide
                                </p>
                                <p> 27 thg 4</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// DetailClass.propTypes = {
//     match: PropTypes.object.isRequired,
//     location: PropTypes.object.isRequired,
//     history: PropTypes.object.isRequired,
// };

const mapStateToProps = (state) => {
    return {
        classOwn: state.classOwn
    };
};
export default connect(mapStateToProps, null)(DetailClass);
