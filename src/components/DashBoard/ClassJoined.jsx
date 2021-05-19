import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./../../css/dashboard.css";
import { actLeaveClassRequest, detailClass} from "./../../action/Action";
import refreshToken from './../../utils/checkToken';
function ClassJoined(props) {
    const { item, onLeaveClass, sendDetailClass } = props;

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
                    <div className="class-name">{item.name || "Tên Lớp"}</div>
                    <div className="class">Mã lớp: {item.referralCode}</div>
                    <div className="teacher">Ngô Trường Giang</div>
                </Link>
                <div className="hover action-class " onClick={onShowAction}>
                    <span className="fas fa-ellipsis-v "></span>
                    <div className={showAction ? "action" : "action hidden"}>
                        {/* <p>Hủy lớp</p> */}
                        <p onClick={() => refreshToken([onLeaveClass(item.id)])}>Dời lớp</p>
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
const mapDispatchToProps = (dispatch, props) => {
    return{
        onLeaveClass: (idclass) =>{
            dispatch(actLeaveClassRequest(idclass))
        },
        sendDetailClass: (item) => {
            dispatch(detailClass(item));
        },
    }
}
export default connect(null, mapDispatchToProps)(ClassJoined);
