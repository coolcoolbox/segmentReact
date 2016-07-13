/**
 * Created by cuss on 2016/7/8.
 */
import React from 'react';
import SGUtils from '../../common/js/SGUtils';

export default class TTab extends React.Component{
    //构造函数
    constructor(props){
        super(props);
    }

    tabHandel(e){
        let target = e.currentTarget,
            index = target.getAttribute('data-index'),
            item = this.props.tabs[index];
        if(this.props.active == index) return;
        if(SGUtils.isFunction(this.props.tabChange)){
            this.props.tabChange(index,item);
        }
    }
    //肯定需要对应的而标题 和图标
    render(){
        let activeIndex = this.props.active,
            className = this.props.className?this.props.className:'';
        return <ul className="tabView__tabs">
        {
            !this.props.tabs?'':(
                this.props.tabs.map((item,key)=>{
                    if(activeIndex == key){
                        className = className + ' active'
                    }else{
                        className = this.props.className?this.props.className:'';
                    }
                    className += ' tabView__tabs_item';
                    return <li key={key} onClick={this.tabHandel.bind(this)} data-index={key} className = {className}>
                        <a className={(item.className?item.className:'') + ' tabView__tabs_item_link'} >{item.text}</a>
                    </li>
                })
            )
            }
        </ul>
    }
}

TTab.props = {
    tabs:React.PropTypes.array,
    tabChange:React.PropTypes.func
};