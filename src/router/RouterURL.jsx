import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import NotFound from "../components/NotFound";

function RouterURL(props) {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/class" component={Dashboard} />
            <Route components={NotFound} />
        </Switch>
    );
}

export default RouterURL;
