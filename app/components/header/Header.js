import React from 'react';
import { Link } from 'react-router'
import Navs from "../navs/Navs"
import Logo from "../logo/Logo"
require("./header.scss");

export default class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            opened:false
        }
    }
    toggleNavs(){

        this.setState({opened: !this.state.opened})
    }
    componentDidMount (){
    }
    render() {

        let data =  this.props.navs;
        return <div id="header">
            <i className={(this.state.opened ? 'active ':'') + 'toggle fa fa-list-ul'} onClick ={this.toggleNavs.bind(this)}></i><Logo />
            <Navs data={data} opened={this.state.opened} click={this.toggleNavs.bind(this)}></Navs>
        </div>
    }
}
Header.props = {
    active:React.PropTypes.number
};