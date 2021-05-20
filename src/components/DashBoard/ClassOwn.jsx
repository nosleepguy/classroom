import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./../../css/dashboard.css";
import { actDeleteClassRequest, detailClass } from "./../../action/Action";
import refreshToken from "./../../utils/checkToken";

function ClassOwn(props) {
    const { item, onDeleteClass, sendDetailClass, userProfile } = props;
    // console.log(item);

    //hủy lớp
    const [showAction, setShowAction] = useState(false);

    const onShowAction = () => {
        setShowAction(!showAction);
        // console.log(showAction);
    };

    const actDeleteClass = () => {
        refreshToken([onDeleteClass(item.id)]);
    };

    return (
        <div className="class-room" key={item.id}>
            <div
                className="top"
                onClick={() =>
                    sendDetailClass({
                        ...item,
                        ownerAvatar: "abc",
                        ownerId: userProfile.id,
                        ownerName: userProfile.username,
                    })
                }
            >
                <Link to={"/class/" + item.id}>
                    <div className="class-name">{item.className}</div>
                    <div className="class">Mã lớp: {item.referralCode}</div>
                    <div className="teacher">{userProfile?.username}</div>
                </Link>
                <div className="hover action-class " onClick={onShowAction}>
                    <span className="fas fa-ellipsis-v "></span>
                    <div className={showAction ? "action" : "action hidden"}>
                        <p onClick={actDeleteClass}>Hủy lớp</p>
                        {/* <p>Dời lớp</p> */}
                    </div>
                </div>
            </div>
            <div className="avatar-teacher">
                <img
                    src="https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg"
                    alt=""
                />
            </div>
            <div className="bottom">
                <div className="item hover">
                    <i className="fas fa-tasks home-work"></i>
                </div>
                <div className="item hover">
                    <i className="far fa-file-alt document"></i>
                </div>
            </div>
        </div>
    );
}

// Class.propTypes = {

// }
const mapStateToProps = (state) => {
    return {
        userProfile: state.userProfile,
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteClass: (idclass) => {
            dispatch(actDeleteClassRequest(idclass));
        },
        sendDetailClass: (item) => {
            dispatch(detailClass(item));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassOwn);
