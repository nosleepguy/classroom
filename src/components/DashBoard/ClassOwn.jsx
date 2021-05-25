import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './../../css/dashboard.css';
import { actDeleteClassRequest, actUpdateClassNameRequest, detailClass } from './../../action/Action';

import refreshToken from './../../utils/checkToken';

import './../../css/classOwn.css';
function ClassOwn(props) {
    const { item, onDeleteClass, onUpdateClass, sendDetailClass, userProfile } = props;
    // console.log(item);

    //hủy lớp
    const [showAction, setShowAction] = useState(false);

    //show form edit
    const [showFormEdit, setShowFormEdit] = useState(false);
    const [valueFormEdit, setValueFormEdit] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
    };
    const onShowAction = () => {
        setShowAction(!showAction);
        // console.log(showAction);
    };

    const actDeleteClass = () => {
        refreshToken([onDeleteClass(item.id)]);
    };

    const actUpdateClass = () => {
        setShowFormEdit(false);
        refreshToken([
            onUpdateClass({
                id: item.id,
                name: {
                    name: valueFormEdit,
                },
            }),
        ]);
    };

    useEffect(() => {
        setValueFormEdit(item.className);
    }, []);

    return (
        <div className="class-room" key={item.id}>
            <div
                className="top"
                onClick={() =>
                    sendDetailClass({
                        ...item,
                        ownerAvatar: userProfile.avatar,
                        ownerId: userProfile.id,
                        ownerName: userProfile.username,
                    })
                }
            >
                <Link to={'/class/' + item.id}>
                    <div className="class-name">{item.className}</div>
                    <div className="class">Mã lớp: {item.referralCode}</div>
                    <div className="teacher">{userProfile?.username}</div>
                </Link>
                <div className="hover action-class " onClick={onShowAction}>
                    <span className="fas fa-ellipsis-v "></span>
                    <div className={showAction ? 'action' : 'action hidden'}>
                        <p onClick={actDeleteClass}>Hủy lớp</p>
                        <p onClick={() => setShowFormEdit(true)}>Đổi tên lớp</p>
                    </div>
                </div>
            </div>
            <div className="avatar-teacher">
                <img src={userProfile.avatar} alt="" />
            </div>
            <div className="bottom">
                <div className="item hover">
                    <i className="fas fa-tasks home-work"></i>
                </div>
                <div className="item hover">
                    <i className="far fa-file-alt document"></i>
                </div>
            </div>

            {/*  chỉnh sửa tên lớp */}
            <div className="edit-nameclass">
                <div className="form-edit" style={showFormEdit ? { display: 'flex' } : { display: 'none' }}>
                    <div className="write-noti">
                        <p>Chỉnh sửa Tên lớp</p>
                        <form onSubmit={onSubmit}>
                            <input
                                type="text"
                                value={valueFormEdit}
                                onChange={(e) => setValueFormEdit(e.target.value)}
                            />
                            <div className="btn">
                                <button type="button" onClick={() => setShowFormEdit(false)}>
                                    Hủy
                                </button>
                                <button
                                    type="button"
                                    style={
                                        valueFormEdit
                                            ? {
                                                  background: '#2C7EEA',
                                                  color: 'white',
                                              }
                                            : {}
                                    }
                                    onClick={actUpdateClass}
                                >
                                    Cập nhật
                                </button>
                            </div>
                        </form>
                    </div>
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
        onUpdateClass: (data) => {
            dispatch(actUpdateClassNameRequest(data));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassOwn);
