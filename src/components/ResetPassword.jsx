import React, { useState } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { actResetPassWordRequest } from "../action/Action";
import "./../css/verifyAccount.css";

function ResetPassword(props) {
    const [email, setEmail] = useState("");

    const handleResetPass = (e) => {
        e.preventDefault();
        props.onResetPassword({ email });
        alert("Kiểm tra Email của bạn!");
    };
    return (
        // lấy form của verify
        <div className="wrapper-verify">
            <table
                className="email-wrapper"
                width="100%"
                cellPadding="0"
                cellSpacing="0"
            >
                <tr>
                    <td align="center">
                        <table
                            className="email-content"
                            width="100%"
                            cellPadding="0"
                            cellSpacing="0"
                        >
                            {/* <!-- Logo --> */}
                            <tr>
                                <td className="email-masthead">
                                    <a className="email-masthead_name">
                                        CITA Classroom
                                    </a>
                                </td>
                            </tr>
                            {/* <!-- Email Body --> */}
                            <tr>
                                <td className="email-body" width="100%">
                                    <table
                                        className="email-body_inner"
                                        align="center"
                                        width="570"
                                        cellPadding="0"
                                        cellSpacing="0"
                                    >
                                        {/* <!-- Body content --> */}
                                        <tr>
                                            <td className="content-cell">
                                                <h1>
                                                    Đặt lại password của bạn
                                                </h1>
                                                <p>
                                                    Nhập Email đăng nhập của bạn
                                                    rồi bấm "Reset" sau đó kiểm
                                                    tra email của bạn
                                                </p>
                                                {/* <!-- Action --> */}
                                                <form
                                                    onSubmit={handleResetPass}
                                                >
                                                    <table
                                                        className="body-action"
                                                        align="center"
                                                        width="100%"
                                                        cellPadding="0"
                                                        cellSpacing="0"
                                                    >
                                                        <tr>
                                                            <td align="center">
                                                                <div>
                                                                    <input
                                                                        type="email"
                                                                        required
                                                                        value={
                                                                            email
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            setEmail(
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                            )
                                                                        }
                                                                        style={{
                                                                            outline:
                                                                                "none",
                                                                            border: "none",
                                                                            padding:
                                                                                "20px",
                                                                            background:
                                                                                "#e6e6e6",
                                                                            borderRadius:
                                                                                "5px",
                                                                            fontSize:
                                                                                "18px",
                                                                            margin: "40px 0",
                                                                            width: "90%",
                                                                        }}
                                                                    />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center">
                                                                <div>
                                                                    <button
                                                                        type="submit"
                                                                        className="button button--blue"
                                                                        // onClick={
                                                                        //     onVarifyEmail
                                                                        // }
                                                                    >
                                                                        Reset
                                                                        Password
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <Link to="/">
                                                        <p>
                                                            Quay lại trang đăng
                                                            nhập
                                                        </p>
                                                    </Link>
                                                </form>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table
                                        className="email-footer"
                                        align="center"
                                        width="570"
                                        cellPadding="0"
                                        cellSpacing="0"
                                    >
                                        <tr>
                                            <td className="content-cell">
                                                <p className="sub center">
                                                    CITA Classroom, Inc.
                                                    <br />
                                                    60TH4, DHTL, 175 Tay Son,
                                                    Dong Da, HN
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    );
}

// ResetPassword.propTypes = {};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onResetPassword: (email) => {
            dispatch(actResetPassWordRequest(email));
        },
    };
};
export default connect(null, mapDispatchToProps)(ResetPassword);
