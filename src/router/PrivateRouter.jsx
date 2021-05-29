import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateClass from './../components/Navigation/CreateClass';
import Dashboard from './../components/DashBoard/Dashboard';
import DetailClass from './../components/Class/DetailClass';
import JoinClass from './../components/Navigation/JoinClass';
import MemberList from './../components/Class/MemberList';
import NotFound from './../components/NotFound/NotFound';
import Setting from '../components/Setting/Setting';
import Document from '../components/Class/Document';

function RouterURL(props) {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/class/:id" component={DetailClass} />
            <Route exact path="/class/:id/memberlist" component={MemberList} />
            <Route exact path="/class/:id/document" component={Document} />
            <Route exact path="/joinclass" component={JoinClass} />
            <Route exact path="/createclass" component={CreateClass} />
            <Route exact path="/setting" component={Setting} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default RouterURL;
