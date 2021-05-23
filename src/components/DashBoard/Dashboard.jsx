import React from "react";
import { connect } from "react-redux";
import "./../../css/dashboard.css";
import ClassOwn from "./ClassOwn";
import ClassJoined from "./ClassJoined";
import None from "../None/None";

function Dashboard(props) {
    const { classOwn, classList } = props;
    let classOwnRender = [],
        classListRender = [];

    if (classOwn) {
        classOwnRender = classOwn.map((item) => {
            return <ClassOwn key={item.id} item={item} />;
        });
    }
    if (classList) {
        classListRender = classList.map((item) => {
            return <ClassJoined key={item.id} item={item} />;
        });
    }
    return (
        <section className="dashboard">
            <div className="allclass">
                {classOwnRender} {classListRender}
                {(classOwnRender.length || classListRender.length) ? (
                    ""
                ) : (
                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                            flexDirection: "column",
                            alignItems: "center",
                            
                        }}
                    >
                        <p className="noclass">Bạn chưa có lớp học nào</p>
                        <None />
                    </div>
                )}
            </div>
        </section>
    );
}

// Dashboard.propTypes = {

// }

const mapStateToProps = (state) => {
    return {
        classOwn: state.classOwn,
        classList: state.classList,
    };
};

export default connect(mapStateToProps, null)(Dashboard);
