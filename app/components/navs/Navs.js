/**
 * Created by cuss on 2016/7/7.
 */
//对应的 头部
//拥有对应的参数
import React from 'react';
import Nav from './Nav'

require('./navs.scss');

export default class Navs extends React.Component{

    render(){
        let {actve,className,opened,data} = this.props;
        return <ul className = {'m-navs ' + (className|| '') + (opened?' open':' false')}>
                    {
                        data.map((item,key)=>{
                            if(key == actve){
                              return  <Nav text={ item.text} url={item.url} className={item.className + ' active'}  icon={item.icon} key={key}></Nav>
                            }else{
                                return   <Nav text={ item.text} url={item.url} className={item.className}  icon={item.icon} key={key}></Nav>
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