import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Header from "./components/nav/Header";
import RouterURL from "./router/RouterURL";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {

    //show tab phục vụ cho click ra ngoài tab thì đóng tab
    const [showtab, setShowTab] = useState(true);
    const onShowtab = (e) => {
        
        if(e.target.className != "tab"){
            setShowTab(true)
        }
        if(e.target.className == "fas fa-bars"){
            setShowTab(!showtab)
        }
    };

    return (
        <Router history={history}>
            <div className="App" onClick={onShowtab}>
                <Header showTab={showtab}/>
                <RouterURL />
            </div>
        </Router>
    );
}

export default App;
