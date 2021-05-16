import React, { useState } from "react";
import { Prompt } from "react-router-dom";
import { connect } from "react-redux";
// import PropTypes from 'prop-types'
import "./../../css/joinclass.css";
import { actJoinClassRequest } from "../../action/Action";
import refreshToken from "../../utils/checkToken";

function JoinClass(props) {
    const [classCode, setClassCode] = useState("");

    // console.log(props.history);
    const onGoBack = (e) => {
        e.preventDefault();
        props.history.push("/");
    };

    const joinClassAction = () => {
        refreshToken([props.actJoinclass(classCode)]);
    };
    return (
        <div className="wrapper">
            <Prompt
                when={classCode != ""}
                message={(location) =>
                    `Bạn có thực sự muốn dời? Dữ liệu của bạn sẽ bị mất?`
                }
            />
            <div className="navigate border-bottom">
                <div>
                    <span className="fas fa-times" onClick={onGoBack}></span>
                    <span>Tham gia lớp học</span>
                </div>
                <button
                    style={
                        classCode != ""
                            ? { background: "#2C7EEA", color: "white" }
                            : {}
                    }
                    onClick={joinClassAction}
                >
                    Tham gia
                </button>
            </div>

            <div className="joincode">
                <p>Mã lớp</p>
                <p>Đề nghị giáo viên cung cấp mã lớp rồi nhập mã đó vào đây</p>
                <input
                    type="text"
                    value={classCode}
                    placeholder="Mã lớp"
                    onChange={(e) => {
                        setClassCode(() => e.target.value);
                    }}
                />
            </div>
            <div className="tutorial">
                <h4>Cách đăng nhập bằng mã lớp học</h4>
                <ul>
                    <li>Sử dụng tài khoản đã đăng ký class room</li>
                    <li>
                        Sử dụng mã lớp học gồm 5 chữ cái hoặc số, không có dấu
                        cách hoặc ký hiệu
                    </li>
                </ul>
            </div>
        </div>
    );
}

// JoinClass.propTypes = {

// }
const mapDispatchToProps = (dispatch, props) => {
    return {
        actJoinclass: (classid) => {
            dispatch(actJoinClassRequest(classid));
        },
    };
};

export default connect(null, mapDispatchToProps)(JoinClass);
