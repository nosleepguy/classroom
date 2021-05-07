import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./../../css/nav.css";

function Nav(props) {
    const { showOptions, showTabprops } = props;
    const [showTab, setShowTab] = useState(true);
    const [showCreateClass, setShowCreateClass] = useState(false);
    const [border, setBorder] = useState([true, false, false]);
    const onFocus = (value) => {
        let aw = [...border];
        aw.map((item, index) => (aw[index] = false));
        aw[value] = true;
        setBorder(aw);
    };

    useEffect(() => {
        // console.log(showTabprops);
        setShowTab(showTabprops);
    });

    const onShowTab = () => {
        setShowTab(!showTab);
    };

    const onShowJoinClass = () => {
        setShowCreateClass(!showCreateClass);
    };

    return (
        <>
            <nav className="nav">
                <div className="action">
                    <div className="class-name">
                        <span className="fas fa-bars" onClick={onShowTab} />
                        <div className="detail">
                            <p className="name">Đồ họa máy tính</p>
                            <p className="class">(60TH4)</p>
                        </div>
                    </div>
                    <div className="join-avatar">
                        <div
                            className={
                                showCreateClass
                                    ? "join fas fa-plus hover active"
                                    : "join fas fa-plus hover"
                            }
                            onClick={onShowJoinClass}
                        >
                            <ul
                                className="ul-join"
                                style={
                                    showCreateClass ? { display: "block" } : {}
                                }
                            >
                                <li className="li-join hover">
                                    Tham gia lớp học
                                </li>
                                <li className="li-join hover" data="aaa">
                                    Tạo lớp học
                                </li>
                            </ul>
                        </div>
                        <div className="avatar"></div>
                    </div>
                </div>
            </nav>
            <div className={showOptions ? "option" : "hide"}>
                <div className="option-item hover" onClick={() => onFocus(0)}>
                    <p className="content">Bảng tin</p>
                    <p className={border[0] ? "border" : ""}></p>
                </div>

                <div className="option-item hover" onClick={() => onFocus(1)}>
                    <p className="content">Mọi người</p>
                    <p className={border[1] ? "border" : ""}></p>
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
                    <NavLink to="/class">
                        <div className="item hover ">
                            <span className="icon fas fa-home"></span>
                            <span className="text">Lớp học</span>
                        </div>
                    </NavLink>
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
                    <NavLink to="/class/malop">
                        <div className="item hover class-active">
                            <div className="icon represent">
                                <div>Đ</div>
                            </div>
                            <div className=" text detail">
                                <p className="name">Đồ họa máy tính</p>
                                <p className="class">(60TH4)</p>
                            </div>
                        </div>
                    </NavLink>
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
                </div>
            </section>
        </>
    );
}

export default Nav;
