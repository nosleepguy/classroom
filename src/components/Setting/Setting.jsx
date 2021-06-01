import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './../../css/setting.css';
import { actUpdateProfileRequest } from '../../action/Action';
import refreshToken from '../../utils/checkToken';
import UploadAvatar from './UploadAvatar';

function Setting(props) {
    const { userProfile, onUpdateUserProfile } = props;

    // console.log(userProfile);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [sex, setSex] = useState(1);
    const [age, setAge] = useState(20);

    useEffect(() => {
        // console.log(userProfile);
        if (userProfile) {
            setName(userProfile.username);
            setEmail(userProfile.email);
            setAvatar(userProfile.avatar);
            setSex(userProfile.sex || 0);
            setAge(userProfile.age || 20);
        }
    }, [userProfile]);

    const onHandleInput = (e) => {
        // console.dir(e.target.value);
        let target = e.target;
        switch (target.name) {
            case 'user-name': {
                setName(target.value);
                break;
            }
            case 'user-email': {
                setEmail(target.value);
                break;
            }
            case 'user-sex': {
                setSex(target.value);
                break;
            }
            case 'user-age': {
                setAge(target.value);
                break;
            }
            default: {
                return;
            }
        }
    };

    const onChangeInfo = () => {
        const dataUpdate = {
            username: name,
            avatar: avatar,
            sex: sex,
            age: age,
        };
        // console.log(dataUpdate);

        refreshToken([onUpdateUserProfile(dataUpdate)]);
    };

    const setLinkAvatar = (linkava) => {
        console.log(linkava);
        setAvatar(linkava);
    };
    return (
        <div className="wraper-setting">
            <p className="profile">Hồ sơ</p>
            <div className="setting">
                <div className="wrapper-input">
                    <p>Tên hiển thị:</p>
                    <input
                        type="text"
                        name="user-name"
                        className="input"
                        value={name}
                        required
                        onChange={onHandleInput}
                    />
                </div>
                <div className="wrapper-input">
                    <p>Email:</p>
                    <input
                        type="text"
                        name="user-email"
                        className="input"
                        value={email}
                        // required
                        style={{ color: '#acacac' }}
                        onChange={onHandleInput}
                        disabled={true}
                    />
                </div>
                <div className="wrapper-input">
                    <p>Giới tính:</p>
                    <select className="input" name="user-sex" value={sex} onChange={onHandleInput}>
                        <option name="Nam" value="0">
                            Nam
                        </option>
                        <option name="Nu" value="1">
                            Nữ
                        </option>
                    </select>
                </div>
                <div className="wrapper-input age">
                    <p>Tuổi:</p>
                    <input type="number" name="user-age" className="input" value={age} onChange={onHandleInput} />
                </div>
                <div className="wrapper-input">
                    <p>Ảnh đại diện:</p>
                    <UploadAvatar setLinkAvatar={setLinkAvatar} />
                </div>
            </div>
            <button type="button" className="button-setting" onClick={onChangeInfo}>
                Xác nhận
            </button>
        </div>
    );
}

// Setting.propTypes = {

// }
const mapStateToProps = (state) => {
    return {
        userProfile: state.userProfile,
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateUserProfile: (dataUser) => {
            dispatch(actUpdateProfileRequest(dataUser));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
