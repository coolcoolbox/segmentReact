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
import Answer from './view/Answer/Answer';
import App from './components/App';

require('./scss/plugins/fontAwesome/font-awesome.scss');
require('./scss/common/animation.scss');
let routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}  >
            <IndexRoute component={Index}/>
            <Route path="/Index"  component={Index}/>
            <Route path="/Answer"  component={Answer}/>
        </Route>
    </Router>
);
ReactDom.render(routes, document.getElementById('app'));

