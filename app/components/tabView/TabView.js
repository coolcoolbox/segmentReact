/**
 * Created by cuss on 2016/7/8.
 */
import React from 'react';
import TTab from  './TTab';
import TView from  './TView';
import SGUtils from '../../common/js/SGUtils';
require('./tab.scss');
export default  class TabView extends React.Component{

    constructor(porps){
        super(porps);
        //init
        this.state = {
            active:0
        }
    }

    componentDidMount(){

    }
    //获取索引 和对应的列表
    tabHandel(index,item){
        this.setState({
            active:index
        });
        if(SGUtils.isFunction(this.props.tabChange)){
            this.props.tabChange(index,item);
        }
    }
    render(){

        let tabs = this.props.tabs;
        return <div>
            <TTab tabs={tabs } tabChange={this.tabHandel.bind(this)} active={this.state.active}/>
            <TView >
            {this.props.EL}
                </TView>
        </div>

    }

}