import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import None2 from "../../None/None2";
import "./../../../css/memberList.css";

import refreshToken from "../../../utils/checkToken";
import Member from "./Member";
import { actGetUserInClassRequest } from "../../../action/Class";

function MemberList(props) {
    const idclass = props.match.params.id;
    const { getMemberList, memberListRes, detailClass, userProfile } = props;

    // console.log(detailClass);

    const [memberList, setMemberList] = useState([]);

    useEffect(() => {
        refreshToken([getMemberList(idclass)]);
    }, []);

    useEffect(() => {
        if (memberListRes) {
            setMemberList([...memberListRes]);
        }
    }, [memberListRes]);

    return (
        <div className="memberlist">
            <div className="teacher">
                <div className="role">
                    <p>Giáo viên</p>
                </div>
                <div className="line">
                    <div
                        className="avatar"
                        style={{
                            backgroundImage: `url(${
                                detailClass.ownerAvatar ||
                                `https://lh3.googleusercontent.com/-PjAlHtvA03w/AAAAAAAAAAI/AAAAAAAAEAs/lmRFcFH3umo/photo.jpg`
                            })`,
                        }}
                    ></div>
                    <div className="name">
                        {detailClass.ownerName || userProfile.username}
                    </div>
                </div>
            </div>
            <div className="students">
                <div className="role">
                    <p>Bạn học</p>
                    <p>{memberList?.length || 0} sinh viên</p>
                </div>
                {memberList?.map((member, index) => {
                    return <Member key={index} member={member} />;
                })}
                {memberList.length == 0 ? <None2 /> : ""}
            </div>
        </div>
    );
}

// MemberList.propTypes = {

// }

const mapStateToProps = (state) => {
    return {
        memberListRes: state.memberList,
        detailClass: state.detailClass,
        userProfile: state.userProfile,
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        getMemberList: (idclass) => {
            dispatch(actGetUserInClassRequest(idclass));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);
