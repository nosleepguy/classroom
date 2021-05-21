import React from "react";
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actVerifyEmailRequest } from "../action/Action";

import "./../css/verifyAccount.css";

function VerifyAccount(props) {
    const token = props.location.search.slice(7);
    console.log(token);

    const onVarifyEmail = () => {
        props.onVerify({ token });
    };
    return (
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
                                                    Verify your email address
                                                </h1>
                                                <p>
                                                    Thanks for signing up for
                                                    CITA Classroom! We're
                                                    excited to have you as an
                                                    early user.
                                                </p>
                                                {/* <!-- Action --> */}
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
                                                                <button
                                                                    className="button button--blue"
                                                                    onClick={
                                                                        onVarifyEmail
                                                                    }
                                                                >
                                                                    Verify Email
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <p>
                                                    Thanks,
                                                    <br />
                                                    The CITA Classroom Team
                                                </p>
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

// VerifyAccount.propTypes = {

// }
const mapDispatchToProps = (dispatch, props) => {
    return {
        onVerify: (data) => {
            dispatch(actVerifyEmailRequest(data));
        },
    };
};
export default connect(null, mapDispatchToProps)(VerifyAccount);
