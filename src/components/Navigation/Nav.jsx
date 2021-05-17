import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import "./../../css/nav.css";
import logoutIcon from "./../../assets/icons/logout.svg";
import { logout, detailClass } from "../../action/Action";

function Nav(props) {
    // console.log(props);

    const {
        showTabp,
        classOwn,
        classList,
        showOptions,
        logout,
        sendDetailClass,
        detailClass,
    } = props;

    //class name ở nav
    const [classNamee, setClassNamee] = useState("" || "CITA Classroom");

    //show tab bên trái
    const [showTab, setShowTab] = useState(false);

    //hiện joinclass hoặc create class
    const [showPlusOption, setShowPlusOption] = useState(false);

    //hiện border ở dưới các option thanh nav
    const [border, setBorder] = useState([true, false]);
    const onFocus = (value) => {
        let aw = [...border];
        aw.map((item, index) => (aw[index] = false));
        aw[value] = true;
        setBorder(aw);
    };

    useEffect(() => {
        setShowTab(showTabp);
    });

    const onShowTab = () => {
        setShowTab(!showTab);
    };

    const onShowPlusHandle = () => {
        setShowPlusOption(!showPlusOption);
    };

    const Logout = () => {
        logout();
    };

    let classOwnRender, classListRender;
    if (classOwn) {
        classOwnRender = classOwn.map((item) => {
            return (
                <NavLink
                    to={"/class/" + item.id}
                    key={item.id}
                    onClick={() => {sendDetailClass(item), setBorder([true, false])}}
                >
                    <div className="item hover class-active">
                        <div className="icon represent">
                            <div>{"T"}</div>
                        </div>
                        <div className=" text detail">
                            <p className="name">{item.className}</p>
                            <p className="class">(60TH4)</p>
                        </div>
                    </div>
                </NavLink>
            );
        });
    }
    if (classList) {
        classListRender = classList.map((item) => {
            return (
                <NavLink
                    to={"/class/" + item.id}
                    key={item.id}
                    onClick={() => {sendDetailClass(item), setBorder([true, false])}}
                >
                    <div className="item hover class-active">
                        <div className="icon represent">
                            <div>{"T"}</div>
                        </div>
                        <div className=" text detail">
                            <p className="name">{item.className}</p>
                            <p className="class">(60TH4)</p>
                        </div>
                    </div>
                </NavLink>
            );
        });
    }

    return (
        <section
            className="header"
            style={showOptions ? { padding: "0" } : { height: "65px" }}
        >
            <nav className="nav">
                <div className="action">
                    <div className="class-name">
                        <span
                            className={
                                !showTab ? "fas fa-chevron-left" : "fas fa-bars"
                            }
                            onClick={onShowTab}
                        />
                        <div className="detail">
                            <p className="name">{classNamee}</p>
                            {/* <p className="class">(60TH4)</p> */}
                        </div>
                    </div>
                    <div className="join-avatar">
                        <div
                            className={
                                showPlusOption
                                    ? "join fas fa-plus hover active"
                                    : "join fas fa-plus hover"
                            }
                            onClick={onShowPlusHandle}
                        >
                            <ul
                                className="ul-join"
                                style={
                                    showPlusOption ? { display: "block" } : {}
                                }
                            >
                                <NavLink to="/joinclass">
                                    <li className="li-join hover">
                                        Tham gia lớp học
                                    </li>
                                </NavLink>
                                <NavLink to="/createclass">
                                    <li className="li-join hover" data="aaa">
                                        Tạo lớp học
                                    </li>
                                </NavLink>
                            </ul>
                        </div>
                        <div className="avatar"></div>
                    </div>
                </div>
            </nav>
            <div className={showOptions ? "option" : "hide"}>
                <div className="option-item hover" onClick={() => onFocus(0)}>
                    <Link to={`/class/${detailClass.id}`}>
                        <p className="content">Bảng tin</p>
                        <p className={border[0] ? "border" : ""}></p>
                    </Link>
                </div>
                {/* <NavLink to={"/class/" + item.id+ "memberlist"} */}
                <div className="option-item hover" onClick={() => onFocus(1)}>
                    <Link to={`/class/${detailClass.id}/memberlist`}>
                        <p className="content">Mọi người</p>
                        <p className={border[1] ? "border" : ""}></p>
                    </Link>
                </div>
            </div>

            {/* //tab */}

            {/* <!-- tab bên trái --> */}
            <section className={showTab ? "tab activetab" : "tab"}>
                <div className="contain border-bottom user">
                    <div className="item hover">
                        <span className="avatar"></span>
                        <div className="infor-user">
                            <div className="username">Rayy</div>
                            <span className="text">UserEmail@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="contain border-bottom">
                    {/* <!-- nếu được chọn thì thêm className active --> */}
                    <NavLink to="/">
                        <div className="item hover ">
                            <span className="icon fas fa-home"></span>
                            <span className="text">Lớp học</span>
                        </div>
                    </NavLink>
                </div>

                {/* <!-- //đây là phần lớp giảng dạy --> */}
                <div className="contain border-bottom">
                    <p
                        style={{
                            padding: "10px 20px",
                            fontSize: "14px",
                            fontWeight: "600",
                            color: "rgb(97, 97, 97)",
                            cursor: "default",
                        }}
                    >
                        Giảng dạy
                    </p>

                    {/* <!-- //thẻ này là các lớp giảng dạy --> */}
                    {classOwnRender}
                </div>

                {/* <!-- //đây là phần đã đăng ký --> */}
                <div className="contain border-bottom">
                    <p
                        style={{
                            padding: "10px 20px",
                            fontSize: "14px",
                            fontWeight: "600",
                            color: "rgb(97, 97, 97)",
                            cursor: "default",
                        }}
                    >
                        Đã đăng ký
                    </p>

                    {/* <!-- //thẻ này là các lớp đã đăng kí --> */}
                    {classListRender}
                </div>

                <div className="contain">
                    <div className="item hover">
                        <span className="icon fas fa-cloud-download-alt"></span>
                        <span className="text">Lớp học đã lưu trữ</span>
                    </div>
                    <div className="item hover">
                        <span className="icon fas fa-cog"></span>
                        <span className="text">Cài đặt</span>
                    </div>
                    <div className="item hover" onClick={Logout}>
                        <img
                            src={logoutIcon}
                            alt=""
                            className="icon iconlogout"
                        />
                        <span className="text logout">Đăng xuất</span>
                    </div>
                </div>
            </section>
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        classOwn: state.classOwn,
        classList: state.classList,
        detailClass: state.detailClass,
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        logout: () => {
            dispatch(logout());
        },
        sendDetailClass: (item) => {
            dispatch(detailClass(item));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
