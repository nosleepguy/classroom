import React from "react";
// import PropTypes from "prop-types";

function None(props) {
    return (
        <div style={{margin : "0 auto", padding : "20px"}}>
            <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_7jnffdxl.json"
                background="transparent"
                speed="1"
                style={{width: "300px", height: "300px"}}
                loop
                autoplay
            ></lottie-player>
        </div>
    );
}

// None.propTypes = {};

export default None;
