import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./../../css/dashboard.css";
import refreshToken from "./../../utils/checkToken";
import { actLeaveClassRequest, detailClass } from "../../action/Class";
function ClassJoined(props) {
    const { item, onLeaveClass, sendDetailClass } = props;
    // console.log(item);

    //dời lớp
    const [showAction, setShowAction] = useState(false);

    const onShowAction = () => {
        setShowAction(!showAction);
        // console.log(showAction);
    };
    return (
        <div className="class-room" key={item.id}>
            <div className="top" onClick={() => sendDetailClass(item)}>
                <Link to={"/class/" + item.id}>
                    <div className="class-name">{item.className}</div>
                    <div className="class">Mã lớp: {item.referralCode}</div>
                    <div className="teacher">{item.ownerName}</div>
                </Link>
                <div className="hover action-class " onClick={onShowAction}>
                    <span className="fas fa-ellipsis-v "></span>
                    <div className={showAction ? "action" : "action hidden"}>
                        <p
                            onClick={() =>
                                refreshToken([onLeaveClass(item.id)])
                            }
                        >
                            Dời lớp
                        </p>
                    </div>
                </div>
            </div>
            <div className="avatar-teacher">
                <img
                    src={
                        item.ownerAvatar ||
                        `https://lh3.googleusercontent.com/-PjAlHtvA03w/AAAAAAAAAAI/AAAAAAAAEAs/lmRFcFH3umo/photo.jpg`
                    }
                    alt="avatar Teacher"
                />
            </div>
            <div className="bottom">
                {/* <div className="item hover">
                    <i className="fas fa-tasks home-work"></i>
                </div> */}
                <Link
                    to={"/class/" + item.id + "/document"}
                    onClick={() => sendDetailClass(item)}
                >
                    <div className="item hover">
                        <i className="far fa-file-alt"></i>
                    </div>
                </Link>
            </div>
        </div>
    );
}

// Class.propTypes = {

// }
const mapDispatchToProps = (dispatch, props) => {
    return {
        onLeaveClass: (idclass) => {
            dispatch(actLeaveClassRequest(idclass));
        },
        sendDetailClass: (item) => {
            dispatch(detailClass(item));
        },
    };
};
export default connect(null, mapDispatchToProps)(ClassJoined);
