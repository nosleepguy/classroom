import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../components/NotFound/NotFound';
import ResetPassword from '../components/Auth/ResetPassword';
import VerifyChangePass from '../components/Auth/VerifyChangePass';
import Login from './../components/Auth/Login';
import VerifyAccount from '../components/Auth/VerifyAccount';

function RouterURL() {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route path="/verify-account" component={VerifyAccount} />
            <Route exac path="/reset-password" component={ResetPassword} />
            <Route path="/verify-change-pass" component={VerifyChangePass} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default RouterURL;
