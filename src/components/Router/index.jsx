import React from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import { createHashHistory } from 'history';

import strings from 'i18n';
import Root from 'components/Root';

const history = process.env.NODE_ENV === 'production' ? browserHistory : hashHistory;

const Home = (location, callback) => {
    document.title = strings.header_home;
    require.ensure([], require => {
        callback(null, require('components/Home').default);
    }, 'home');
};

const Course = (location, callback) => {
    document.title = strings.header_courses;
    require.ensure([], require => {
        callback(null, require('components/Course').default);
    }, 'course');
};

const CampSummer = (location, callback) => {
    document.title = strings.header_summer_camp;
    require.ensure([], require => {
        callback(null, require('components/Camp').default.Summer);
    }, 'camp');
};

const CourseParent = (location, callback) => {
    document.title = strings.header_parent_courses;
    require.ensure([], require => {
        callback(null, require('components/CourseParent').default);
    }, 'courseParent');
};

const App = (location, callback) => {
    document.title = strings.header_app;
    require.ensure([], require => {
        callback(null, require('components/App').default);
    }, 'app');
};

const Download = (location, callback) => {
    document.title = strings.header_download;
    require.ensure([], require => {
        callback(null, require('components/Download').default);
    }, 'download');
};

const Contact = (location, callback) => {
    document.title = strings.header_contact;
    require.ensure([], require => {
        callback(null, require('components/Contact').default);
    }, 'contact');
};

const FourOhFour = (location, callback) => {
    document.title = strings.error_404;
    require.ensure([], require => {
        callback(null, require('components/Common').default.FourOhFour);
    }, 'common');
};

export default () => (
    <Router
        history={history}
        render={applyRouterMiddleware(useScroll())}>
        <Route path='/' component={Root}>
            <IndexRoute getComponent={Home} />
            <Route path='/courses' getComponent={Course} />
            <Route path='/summer-camp' getComponent={CampSummer} />
            <Route path='/parent-courses' getComponent={CourseParent} />
            <Route path='/app' getComponent={App} />
            <Route path='/download' getComponent={Download} />
            <Route path='/contact' getComponent={Contact} />
            <Route path='*' getComponent={FourOhFour} />
        </Route>
    </Router>
);