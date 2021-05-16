import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Login from './../components/Auth/Login';

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
