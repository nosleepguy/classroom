import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "./../../utils/customAxios";
// import PropType/s from 'prop-types'
import "./../../css/memberList.css";
function MemberList(props) {
    const idclass = props.match.params.id;
    const [memberList, setMemberList] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get(`user/class/members?classId=${idclass}`)
    //         .then((response) => {
    //             console.log(response.data.data);
    //         })
    //         .catch((error) => {
    //             console.log(err);
    //         });
    // }, []);

    return (
        <div className="memberlist">
            <div className="teacher">
                <div className="role">
                    <p>Giáo viên</p>
                </div>
                <div className="line">
                    <div className="avatar"></div>
                    <div className="name">Ngô Trường Giang</div>
                </div>
            </div>
            <div className="students">
                <div className="role">
                    <p>Bạn học</p>
                    <p>30 sinh viên</p>
                </div>
                <div className="line">
                    <div className="avatar-student"></div>
                    <div className="name">Nguyễn Mạnh Hùng</div>
                </div>
                <div className="line">
                    <div className="avatar-student"></div>
                    <div className="name">Nguyễn Quang Huy</div>
                </div>
                <div className="line">
                    <div className="avatar-student"></div>
                    <div className="name">Nguyễn Thanh Tùng</div>
                </div>
                <div className="line">
                    <div className="avatar-student"></div>
                    <div className="name">Nguyễn Thị Yến Nhi</div>
                </div>
                <div className="line">
                    <div className="avatar-student"></div>
                    <div className="name">Ngô Thị Duyên</div>
                </div>
            </div>
        </div>
    );
}

// MemberList.propTypes = {

// }

export default MemberList;
