import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./../../css/login.css";
import Loading from "../Loading/Loading";
import { actLoginRequest, actRegisterRequest } from "../../action/Auth";

function Login(props) {
    const { onRegister, onLogin, dataResponse } = props;
    //show modal fail login
    const [showModal, setShowModal] = useState(false);

    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const [nameRegister, setNameRegister] = useState("");
    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");

    const [loading, setLoading] = useState(false);

    //show form login hoac register
    const [toggle, setToggle] = useState(null);
    const onToggleLogin = () => {
        setToggle(true);
    };
    const onToggleRegister = () => {
        setToggle(false);
        // console.log(toggle);
    };

    const onHandleInput = (e) => {
        let value = e.target.value;
        let id = e.target.id;

        switch (id) {
            case "emailLogin": {
                setEmailLogin(value);
                break;
            }
            case "passwordLogin": {
                setPasswordLogin(value);

                break;
            }
            case "nameRegister": {
                setNameRegister(value);
                break;
            }
            case "emailRegister": {
                setEmailRegister(value);
                break;
            }
            case "passwordRegister": {
                setPasswordRegister(value);
                break;
            }
        }
    };

    const onHandleRegister = () => {
        const dataregister = {
            username: nameRegister,
            email: emailRegister,
            password: passwordRegister,
        };
        onRegister(dataregister);
    };
    const onHandleLogin = () => {
        const datalogin = {
            email: emailLogin,
            password: passwordLogin,
        };
        setLoading(true);
        onLogin(datalogin);
    };

    // có data phản hồi về thì tắt loading
    useEffect(() => {
        // console.log(dataResponse);
        if (dataResponse) {
            setLoading(false);
        }
        if(dataResponse.success == false) {
            setShowModal(true);
        }
    }, [dataResponse]);
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <form>
                        <div className="wrapper-login">
                            <div className="form-structor">
                                <div
                                    className={
                                        toggle == false
                                            ? "signup"
                                            : "signup slide-up"
                                    }
                                >
                                    <h2
                                        className="form-title"
                                        id="signup"
                                        onClick={onToggleRegister}
                                    >
                                        <span>or</span>Sign up
                                    </h2>
                                    <div className="form-holder">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Name"
                                            required
                                            id="nameRegister"
                                            value={nameRegister}
                                            onChange={onHandleInput}
                                        />
                                        <input
                                            type="email"
                                            className="input"
                                            placeholder="Email"
                                            id="emailRegister"
                                            required
                                            value={emailRegister}
                                            onChange={onHandleInput}
                                        />
                                        <input
                                            type="password"
                                            className="input"
                                            placeholder="Password"
                                            id="passwordRegister"
                                            required
                                            value={passwordRegister}
                                            onChange={onHandleInput}
                                        />
                                    </div>
                                    <button
                                        className="submit-btn"
                                        type="button"
                                        onClick={onHandleRegister}
                                    >
                                        Sign up
                                    </button>
                                </div>
                                <div
                                    className={
                                        toggle ? "login" : "login slide-up"
                                    }
                                >
                                    <div className="center">
                                        <h2
                                            className="form-title"
                                            id="login"
                                            onClick={onToggleLogin}
                                        >
                                            <span>or</span>Log in
                                        </h2>
                                        <div className="form-holder">
                                            <input
                                                type="email"
                                                className="input"
                                                placeholder="Email"
                                                id="emailLogin"
                                                required
                                                value={emailLogin}
                                                onChange={onHandleInput}
                                            />
                                            <input
                                                type="password"
                                                className="input"
                                                placeholder="Password"
                                                id="passwordLogin"
                                                // required
                                                value={passwordLogin}
                                                onChange={onHandleInput}
                                            />
                                        </div>
                                        <Link
                                            to="/reset-password"
                                            style={{
                                                fontSize: "10px",
                                                margin: "30px 10px",
                                                color: "#7493A2",
                                            }}
                                        >
                                            Quên mật khẩu?{" "}
                                        </Link>
                                        <button
                                            className="submit-btn"
                                            onClick={onHandleLogin}
                                        >
                                            Log in
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div
                        className={
                            showModal
                                ? "wrapper-modal"
                                : "wrapper-modal modal-hide"
                        }
                    >
                        <div className="box">
                            <div className="content">
                                {dataResponse.message}
                            </div>
                            <button
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Đóng
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

// Login.propTypes = {

// }

const mapStateToProps = (state) => {
    return {
        dataResponse: state.authenapp,
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onRegister: (dataregister) => {
            dispatch(actRegisterRequest(dataregister));
        },
        onLogin: (datalogin) => {
            dispatch(actLoginRequest(datalogin));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
