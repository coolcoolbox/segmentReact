import React from 'react';
import Header from "../../components/header/Header"
import TabView from "../../components/tabView/TabView"
import SGDdata from "../../common/js/SGDdata"
import { Link } from 'react-router'

require("./index.scss");

export default class Index extends React.Component {
    componentWillMount(){
        SGDdata.getAriticle().then(function (d) {
            console.log(d);
        }, function (e) {
            console.log(e);
        })
    }
    render() {
        return <div id="indexPane">
            <Header active={0} />

        </div>
    }
}