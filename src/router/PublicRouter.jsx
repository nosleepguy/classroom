import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import Login from './../components/Login';

function RouterURL(props) {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default RouterURL;
