import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './component/App';
import Home from './component/home/Home';
import About from './component/about/About';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
    </Route>
);
