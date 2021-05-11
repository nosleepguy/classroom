import React, { useState } from "react";
import "./../css/detailclass.css";
import CreateNoti from "./CreateNoti";

function DetailClass(props) {
    console.log(props.match);
    
    const [showCreateNoti, setShowCreateNoti] = useState(false);
    const onShowCreateNoti = () => {
        setShowCreateNoti(!showCreateNoti);
    };
    return (
        <section className="insideclass">
            <div className="main">
                <div className="classname">
                    <p>Đồ họa máy tính</p>
                    <p>(60th4)</p>
                    <p>Mã lớp: bacg4</p>
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

export default DetailClass;
