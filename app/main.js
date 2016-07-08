/**
 *
 * program entry
 * @author cuss
 * @date 2016-7-5 10:42:19
 * @fileName main.js
 * @description program entry and load  modules
 *
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route,IndexRoute,hashHistory } from 'react-router';
import Index from './view/index/Index';
import App from './components/App';

require('./scss/plugins/fontAwesome/font-awesome.scss');
let routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}  >
            <IndexRoute component={Index}/>
            <Route path="/index"  component={Index}/>
        </Route>
    </Router>
);
ReactDom.render(routes, document.getElementById('app'));

