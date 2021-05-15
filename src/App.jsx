import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import { createBrowserHistory } from "history";
import Nav from "./components/Nav";
import PublicRouter from "./router/PublicRouter";
import PrivateRouter from "./router/PrivateRouter";
const history = createBrowserHistory();
import * as actions from "./action/Action";

import refreshToken from "./utils/checkToken";

function App(props) {
    const { dataResponse, getOwnClass, getListClass } = props;

    //show tab phục vụ cho click ra ngoài tab thì đóng tab
    const [showtab, setShowTab] = useState(true);

    // khi = true thì 2 option ở nav sẽ hiện ra
    const [showOptions, setShowOptions] = useState(false);

    const onHandleTabAndOption = (e) => {
        // let token = localStorage.getItem("tk");
        // setToken(token);

        if (e.target.className != "tab") {
            setShowTab(true);
        }
        if (e.target.className == "fas fa-bars") {
            setShowTab(!showtab);
        }

        //show option dựa vào pathname
        // => có bug khi click vào quay lại ở trình duyệt chứ k action ở app
        if (window.location.pathname == "/") {
            setShowOptions(false);
        }
        if (window.location.pathname !== "/") {
            setShowOptions(true);
        }
    };

    //auth
    const [token, setToken] = useState("");

    useEffect(() => {
        setToken(dataResponse.token);
    }, [dataResponse]);

    useEffect(() => {
        if (token) {
            refreshToken([getOwnClass, getListClass]);
        }
    }, [token]);


    return (
        <Router history={history}>
            {token ? (
                <div className="App" onClick={onHandleTabAndOption}>
                    <Nav showTabp={showtab} showOptions={showOptions} />
                    <PrivateRouter />
                </div>
            ) : (
                <div className="App" onClick={onHandleTabAndOption}>
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

const mapDispatchToProps = (dispatch, props) => {
    return {
        getOwnClass: () => {
            dispatch(actions.actgetOwnClassRequest());
        },
        getListClass: () => {
            dispatch(actions.actgetListClassRequest());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
