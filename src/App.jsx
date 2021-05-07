import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import RouterURL from "./router/RouterURL";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <RouterURL />
            </div>
        </Router>
    );
}

export default App;
