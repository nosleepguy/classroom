import React from "react";
import { connect } from "react-redux";
import "./../css/dashboard.css";
import Class from "./Class";

function Dashboard(props) {
    const { classList } = props;

    console.log(classList);
    let classListRender;
    
    if (classList) {
        classListRender = classList.map((item) => {
            return (
                <Class key={item.id} item={item}/>
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
