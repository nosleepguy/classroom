import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateClass from './../components/Navigation/CreateClass';
import Dashboard from './../components/DashBoard/Dashboard';
import JoinClass from './../components/Navigation/JoinClass';
import NotFound from './../components/NotFound/NotFound';
import Setting from '../components/Setting/Setting';
import DetailClass from '../components/Class/NewsFeed/DetailClass';
import MemberList from '../components/Class/Peopple/MemberList';
import Document from '../components/Class/Document/Document';

function RouterURL() {
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
