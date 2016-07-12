/**
 * Created by cuss on 2016/7/7.
 */
// 构建一个nav 默认的 中的一个
// 需要的参数 即使 对应的link  和对应的文字 对应的className

import React from 'react';
import {Link} from 'React-router';

export default
class Nav extends React.Component {

    /*    constructor()
     {
     super();
     }*/

    /*    componentDidMount(){

     }*/

    clickHandel(e) {
        let target = e.currentTarget,
            index;
        if(target){
            index = target.getAttribute('data-index');
        }
        if (this.props.clickHandel) {
            this.props.clickHandel(index);
        }
    }

    render() {
        return <li className={this.props.className} onClick={this.clickHandel.bind(this)} data-index={this.props.id}>
            <Link to={this.props.url}>
                      {this.props.icon ? <i className={this.props.icon}></i> : null}
                <span>{this.props.text}</span>
            </Link>
        </li>
    }
}

Nav.propTypes = {
    text: React.PropTypes.string.isRequired,
    url: React.PropTypes.string,
    className: React.PropTypes.string,
    icon: React.PropTypes.string
};