import React, { useState } from "react";
// import PropTypes from 'prop-types'
import "./../css/createclass.css";
function CreateClass(props) {
    const [className, setClassName] = useState("");

    const onHandleForm = (e) => {
        e.preventDefault();
    };

    const onGoBack = () => {
        props.history.push("/class");
    };
    return (
        <div className="createclass">
            <div className="form">
                <p>Tạo lớp học</p>
                <form onSubmit={onHandleForm}>
                    <input
                        type="text"
                        value={className}
                        placeholder="Nhập tên lớp"
                        onChange={(e) => setClassName(e.target.value)}
                    />
                    <div className="btn">
                        <button type="reset" onClick={onGoBack}>
                            Hủy
                        </button>
                        <button
                            type="submit"
                            style={
                                className != ""
                                    ? { background: "#2C7EEA", color: "white" }
                                    : {}
                            }
                        >
                            Tạo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// CreateClass.propTypes = {

// }

export default CreateClass;
