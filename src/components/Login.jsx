import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import * as action from "./../action/Action";
// import PropTypes from "prop-types";
import "./../css/login.css";
function Login(props) {

    const { onRegister, onLogin } = props;

    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const [nameRegister, setNameRegister] = useState("");
    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");

    //show form login hoac register
    const [toggle, setToggle] = useState(null);
    const onToggleLogin = () => {
        setToggle(true);
    };
    const onToggleRegister = () => {
        setToggle(false);
        console.log(toggle);
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

    const onHandleRegister = async () => {
        let dataregister = Object.create(null);
        dataregister = {
            // name: nameRegister,
            email: emailRegister,
            password: passwordRegister,
        };
        await onRegister(dataregister);
    };

    const onHandleLogin = async () => {
        let datalogin = Object.create(null);
        datalogin = {
            email: emailLogin,
            password: passwordLogin
        }
        await onLogin(datalogin)
    }
    return (
        <form action="">
            <div className="wrapper-login">
                <div className="form-structor">
                    <div
                        className={
                            toggle == false ? "signup" : "signup slide-up"
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
                            type="submit"
                            onClick={onHandleRegister}
                        >
                            Sign up
                        </button>
                    </div>
                    <div className={toggle ? "login" : "login slide-up"}>
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
                                    required
                                    value={passwordLogin}
                                    onChange={onHandleInput}
                                />
                            </div>
                            <button className="submit-btn" onClick={onHandleLogin}>Log in</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
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
            dispatch(action.actRegisterRequest(dataregister));
        },
        onLogin : (datalogin) => {
            dispatch(action.actLoginRequest(datalogin))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
