import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./../css/dashboard.css";

function Dashboard(props) {
    const { classList } = props;
    console.log(classList);
    let classListRender;
    if (classList) {
        classListRender = classList.map((item) => {
            return (
                <NavLink to={"/class/" + item.id} key={item.id}>
                    <div className="class-room">
                        <div className="top">
                            <div className="class-name">
                                {item.name || "Tên Lớp"}
                            </div>
                            <div className="class">(60TH4)</div>
                            <div className="teacher">Ngô Trường Giang</div>
                        </div>
                        <div className="avatar-teacher">
                            <img
                                src="https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg"
                                alt=""
                            />
                        </div>
                        <div className="bottom">
                            <div className="item hover">
                                <i className="fas fa-tasks home-work"></i>
                            </div>
                            <div className="item hover">
                                <i className="far fa-file-alt document"></i>
                            </div>
                        </div>
                    </div>
                </NavLink>
            );
        });
    }
    return (
        <section className="dashboard">
            <div className="allclass">{classListRender}</div>
        </section>
    );
}

// Dashboard.propTypes = {

// }

const mapStateToProps = (state) => {
    return {
        classList: state.classHandle,
    };
};

export default connect(mapStateToProps, null)(Dashboard);
