import React from "react";
import "./../css/dashboard.css";


function Dashboard(props) {
    return (
        <section className="dashboard">
            <div className="top-fix">
                <span className="item hover">
                    <span className="icon fas fa-clipboard-list"></span>
                    <span className="text">Việc cần làm</span>
                </span>
                <span className="item hover">
                    <span className="icon far fa-calendar"></span>
                    <span className="text">Lịch</span>
                </span>
            </div>
            <div className="allclass">
                <div className="class-room">
                    <div className="top">
                        <div className="class-name">Đồ họa máy tính</div>
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
                <div className="class-room">
                    <div className="top">
                        <div className="class-name">Đồ họa máy tính</div>
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
            </div>
        </section>
    );
}

// Dashboard.propTypes = {

// }

export default Dashboard;
