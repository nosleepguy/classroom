import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';

import * as actions from './action/Action';
import PublicRouter from './router/PublicRouter';
import PrivateRouter from './router/PrivateRouter';
import Nav from './components/Navigation/Nav';

import refreshToken from './utils/checkToken';
import './App.css';

const history = createBrowserHistory();

function App(props) {
    const { dataResponse, getOwnClass, getListClass, getUserProfile } = props;

    //show tab phục vụ cho click ra ngoài tab thì đóng tab
    const [showtab, setShowTab] = useState(true);

    // khi = true thì 2 option ở nav sẽ hiện ra
    const [showOptions, setShowOptions] = useState(false);

    const onHandleTabAndOption = (e) => {
        // let token = localStorage.getItem("tk");
        // setToken(token);

        if (e.target.className != 'tab') {
            setShowTab(true);
        }
        if (e.target.className == 'fas fa-bars') {
            setShowTab(!showtab);
        }

        //show option dựa vào pathname
        // => có bug khi click vào quay lại ở trình duyệt chứ k action ở app
        if (window.location.pathname == '/' || window.location.pathname == '/setting') {
            setShowOptions(false);
        } else {
            setShowOptions(true);
        }
    };

    //auth
    const [token, setToken] = useState('');

    //lấy token để khi có token thì mới gọi api lấy data về
    useEffect(() => {
        let token = localStorage.getItem('tk');
        setToken(token);
    }, [dataResponse]);

    useEffect(() => {
        if (token) {
            refreshToken([getOwnClass, getListClass, getUserProfile]);
        }
    }, [token]);

    return (
        <Router history={history}>
            {token ? (
                <div className="App" onClick={onHandleTabAndOption}>
                    <Nav showTabp={showtab} showOptions={showOptions} />
                    <PrivateRouter />
                </div>
            ) : (
                <div className="App" onClick={onHandleTabAndOption}>
                    <PublicRouter />
                </div>
            )}
        </Router>
    );
}
const mapStateToProps = (state) => {
    return {
        dataResponse: state.authenapp,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        getOwnClass: () => {
            dispatch(actions.actgetOwnClassRequest());
        },
        getListClass: () => {
            dispatch(actions.actgetListClassRequest());
        },
        getUserProfile: () => {
            dispatch(actions.actGetProfileRequest());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
