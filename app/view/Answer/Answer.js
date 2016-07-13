import React from 'react';
import TabView from "../../components/tabView/TabView"
import SGDdata from "../../common/js/SGDdata"
import Article from "../../components/article/Article"

require("./Answer.scss");

export default class Index extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount() {
        this.props.router&&this.props.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeave
        )
    }

    routerWillLeave(nextLocation) {
        console.log('leve',nextLocation);
    }

    render() {
        return <div id="anwser">
            Anwser Page
        </div>
    }
}