/**
 * Created by cuss on 2016/7/7.
 */
//对应的 头部
//拥有对应的参数
import React from 'react';
import Nav from './Nav'

require('./navs.scss');

export default class Navs extends React.Component{

    clickHandel(index){
        if(this.props.click){
            this.props.click(null,index);
        }
    }
    render(){
        let {active,className,opened,data} = this.props;
        return <ul className = {'m-navs ' + (className|| '') + (opened?' open':'')}>
                    {
                        data.map((item,key)=>{
                            if(key == active){
                              return  <Nav text={ item.text} url={item.url} className={item.className + ' active'}  icon={item.icon} key={key} id={key} clickHandel={this.clickHandel.bind(this)}></Nav>
                            }else{
                                return   <Nav text={ item.text} url={item.url} className={item.className}  icon={item.icon} key={key} id={key} clickHandel={this.clickHandel.bind(this)}></Nav>
                            }
                        })
                        }
                </ul>
    }
}
Navs.props = {
    data:React.PropTypes.array.isRequired,
    className:React.PropTypes.string,
    active:React.PropTypes.number,
    opened:React.PropTypes.bool
};