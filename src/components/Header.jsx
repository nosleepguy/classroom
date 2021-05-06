import React, { useState } from "react";
import "./../css/header.css";
import Nav from "./Nav";
function Header(props) {
    
    // khi = true thì 3 option ở nav sẽ hiện ra
    const [showOptions, setShowOptions] = useState(true);

    return (
        <section
            className="header"
            style={showOptions ? {padding: "0"} : { height: "65px" }}
        >
            <Nav showOptions={showOptions} />
        </section>
    );
}

export default Header;
