import React from 'react';
import { Link } from 'react-router';
import Header from "./header/Header";
import SGDdata from "../common/js/SGDdata";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require("../scss/common/reset.scss");

export default class App extends React.Component {

    constructor(props){
        super(props);
        let navs = SGDdata.getNav();
        this.state = {
            navs:navs
        }
    }

    render() {
        return <div className="App">
            <Header navs={this.state.navs}/>
            <ReactCSSTransitionGroup
                component="div"
                transitionName="fadeTransition"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
              {React.cloneElement(this.props.children, {
                  key: this.props.location.pathname
              })}
            </ReactCSSTransitionGroup>
        </div>
    }

}