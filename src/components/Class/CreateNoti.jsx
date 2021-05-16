import React from "react";
import "./../../css/createnoti.css";

function CreateNoti(props) {
    const { showCreateNoti,onShowCreateNotiEvent } = props;
    const onHandleForm = (e) => {
        e.preventDefault();
    };
    return (
        <div
            className="write-noti"
            style={showCreateNoti ? { display: "block" } : { display: "none" }}
        >
            <p>Tạo thông báo mới cho lớp học của bạn</p>
            <form onSubmit={onHandleForm}>
                <textarea cols="30" rows="10"></textarea>
                <div className="btn">
                    <button type="button" onClick={onShowCreateNotiEvent}>Hủy</button>
                    <button type="submit">Đăng</button>
                </div>
            </form>
        </div>
    );
}

export default CreateNoti;
