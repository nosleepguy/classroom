import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import { createBrowserHistory } from "history";
import Nav from "./components/Nav";
import PublicRouter from "./router/PublicRouter";
import PrivateRouter from "./router/PrivateRouter";
const history = createBrowserHistory();

function App(props) {
    
    const { dataResponse } = props;
    //show tab phục vụ cho click ra ngoài tab thì đóng tab
    const [showtab, setShowTab] = useState(true);
    const onShowtab = (e) => {
        if (e.target.className != "tab") {
            setShowTab(true);
        }
        if (e.target.className == "fas fa-bars") {
            setShowTab(!showtab);
        }
    };

    //fake auth co token
    const [token, setToken] = useState("");

    useEffect(() => {
        console.log(dataResponse.token);
        let tk = JSON.parse(localStorage.getItem("token"));
        setToken(tk);
    }, [dataResponse]);

    return (
        <Router history={history}>
            {token ? (
                <div className="App" onClick={onShowtab}>
                    <Nav showTabp={showtab} />
                    <PrivateRouter />
                </div>
            ) : (
                <div className="App" onClick={onShowtab}>
                    <PublicRouter />
                </div>
            )}
        </Router>
    );
}
const mapStateToProps = (state) => {
    return {
        dataResponse: state.authenapp,
    };
};
export default connect(mapStateToProps, null)(App);
