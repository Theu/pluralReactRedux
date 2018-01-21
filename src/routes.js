import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './component/App';
import Home from './component/home/Home';
import About from './component/about/About';
import CoursesPage from './component/courses/CoursesPage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="Home" component={Home} />
        <Route path="about" component={About} />
        <Route path="CoursesPage" component={CoursesPage} />
    </Route>
);
