import React, { useState } from "react";
import { connect } from "react-redux";
import { actVerifyPassWordRequest } from "../action/Action";
import { Link } from "react-router-dom";

// import PropTypes from 'prop-types'
import "./../css/verifyAccount.css";

function VerifyChangePass(props) {
    // console.log(props.location.search.splice(-7));
    const token = props.location.search.slice(7);

    const [password, setPassword] = useState("");

    const handleVerifyPass = (e) => {
        e.preventDefault();
        props.onVerifyPassword({ password, token });
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
                                            <td
                                                className="content-cell"
                                                style={{
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <h1>
                                                    Đặt lại password của bạn
                                                </h1>

                                                {/* <!-- Action --> */}
                                                <form
                                                    onSubmit={handleVerifyPass}
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
                                                                        type="password"
                                                                        required
                                                                        value={
                                                                            password
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            setPassword(
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
                                                                            width: "100%",
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
                                                                        Xác nhận
                                                                        password
                                                                        mới
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </form>
                                            </td>
                                        </tr>
                                        <Link to="/">
                                            <p>Quay lại trang đăng nhập</p>
                                        </Link>
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

// VerifyChangePass.propTypes = {

// }

const mapDispatchToProps = (dispatch, props) => {
    return {
        onVerifyPassword: (data) => {
            dispatch(actVerifyPassWordRequest(data));
        },
    };
};

export default connect(null, mapDispatchToProps)(VerifyChangePass);
