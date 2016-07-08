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

        let data = [
            {
                'text':'1',
                'url':'/Index',
                className:'index',
                icon:'icon-data'
            },
            {
                'text':'2',
                'url':'/purchase',
                className:'purchase',
                icon:'icon-data'
            }
        ];
        return <div id="header">
            <i className='toggle fa fa-list-ul' onClickCapture ={this.toggleNavs.bind(this)}></i><Logo />
            <Navs active={this.props.active} data={data} opened={this.state.opened}></Navs>
        </div>
    }
}
Header.props = {
    active:React.PropTypes.number
};