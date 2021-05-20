import React, { useState } from "react";
import { connect } from "react-redux";
import refreshToken from "./../../utils/checkToken";
// import PropTypes from "prop-types";
import { actDeleteUserInClassRequest } from "./../../action/Action";

function Member(props) {
    const { member, detailClass, userProfile, deleteMember } = props;

    const [showActDelMember, setShowActDelMember] = useState(false);

    return (
        <div className="line">
            <div className="avatar"></div>
            <div className="name">
                {member.name == null ? "Name" : member.name}
            </div>
            <div
                className={
                    detailClass.ownerId == userProfile.id
                        ? "action"
                        : "action hide"
                }
            >
                <span
                    className="fas fa-ellipsis-v hover"
                    onClick={() => setShowActDelMember(!showActDelMember)}
                ></span>
                <div
                    className={
                        showActDelMember ? "delete hover" : "delete hide"
                    }
                >
                    <p
                        onClick={() => refreshToken([
                            deleteMember({
                                classId: detailClass.id,
                                memberId: member.userId,
                            }),
                        ])}
                    >
                        Xóa
                    </p>
                </div>
            </div>
        </div>
    );
}

// Member.propTypes = {};
const mapStateToProps = (state) => {
    return {
        detailClass: state.detailClass,
        userProfile: state.userProfile,
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteMember: (idclass) => {
            dispatch(actDeleteUserInClassRequest(idclass));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Member);
