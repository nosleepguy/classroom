import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import DetailClass from "../components/DetailClass";
import NotFound from "../components/NotFound";

function RouterURL(props) {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/class" component={Dashboard} />
            <Route exact path="/class/malop" component={DetailClass} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default RouterURL;
