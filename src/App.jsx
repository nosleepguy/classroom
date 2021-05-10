import React, { useState } from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

import "./App.css";
import { createBrowserHistory } from "history";
import Nav from "./components/Nav";
import PublicRouter from "./router/PublicRouter";
import PrivateRouter from "./router/PrivateRouter";
const history = createBrowserHistory();

function App() {
    
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
    const [token, setToken] = useState("abc");
    const logout = () => {
        setToken("");
    };

    return (
        <Router history={history}>
            {token ? (
                <div className="App" onClick={onShowtab}>
                    <Nav showTabp={showtab} />
                    <PrivateRouter />
                    <button onClick={logout}>logout</button>
                </div>
            ) : (
                <div className="App" onClick={onShowtab}>
                    <PublicRouter />
                </div>
            )}
        </Router>
    );
}

export default App;
