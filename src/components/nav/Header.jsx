import React, { useState } from "react";
import "./../../css/header.css";
import Nav from "./Nav";
function Header(props) {
    // console.log(props);
    
    // khi = true thì 2 option ở nav sẽ hiện ra
    const [showOptions, setShowOptions] = useState(false);

    return (
        <section
            className="header"
            style={showOptions ? { padding: "0" } : { height: "65px" }}
        >
            <Nav showOptions={showOptions} showTabprops={props.showTab}/>
        </section>
    );
}

export default Header;
