import React, { useState } from "react";
// import PropTypes from "prop-types";
import "./../css/login.css";
function Login(props) {
    //show form login hoac register
    const [toggle, setToggle] = useState(null);
    const onToggleLogin = () => {
        setToggle(true);
    };
    const onToggleRegister = () => {
        setToggle(false);
        console.log(toggle);
    };
    
    return (
        <form action="">
        <div className="wrapper-login">
            <div className="form-structor">
                <div className={toggle ==false ? "signup" : "signup slide-up"}>
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
                        />
                        <input
                            type="email"
                            className="input"
                            placeholder="Email"
                            required
                        />
                        <input
                            type="password"
                            className="input"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button className="submit-btn" type="submit">Sign up</button>
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
                                required
                            />
                            <input
                                type="password"
                                className="input"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <button className="submit-btn">Log in</button>
                        <button className="submit-btn">
                            Log in with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </form>
    );
}

// Login.propTypes = {

// }

export default Login;
