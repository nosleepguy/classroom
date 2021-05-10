import React from "react";
import { Link } from "react-router-dom";
import "./../css/notfound.css";
function NotFound(props) {
    return (
        <div className="notfound">
            <lottie-player
                src="https://assets4.lottiefiles.com/packages/lf20_c8szgzpw.json"
                background="transparent"
                style={{width: "500px", height: "500px"}}
                speed="1"
                autoplay
            ></lottie-player>
            <Link to="/">Quay lại trang chủ</Link>
        </div>
    );
}

export default NotFound;
