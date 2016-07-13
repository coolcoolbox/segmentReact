import React from 'react';
import TabView from "../../components/tabView/TabView"
import SGDdata from "../../common/js/SGDdata"
import Article from "../../components/article/Article"
import { Link } from 'react-router'

require("./index.scss");

export default class Index extends React.Component {
    constructor(props){
        super(props);
        let tabs =   SGDdata.getIndexTabs();
        this.state = {
            active:0,
            EL:null,
            tabs:tabs
        }
    }
    componentWillMount(){

        //获取 tabs的数据
        this.tabChangeHandel();

    }


    tabChangeHandel(active,item){
        //获取相应的信息
        let that = this,
            index,
            url ;
        index = active || this.state.active;
        url = this.state.tabs[index].key;
        SGDdata.request({key:url}).then(function (d) {
            that.setState({
                data:d.ret_msg.data
            })
        }, function (e) {
        });
    }
    render() {
        //改变 组件
        let EL =   this.state.data?this.state.data.map((item,key)=>{
            return <Article {...item} key={key}/>
        }):null;
        return <div id="indexPane">
            <TabView tabChange={this.tabChangeHandel.bind(this)} EL={EL} tabs={this.state.tabs} active={this.state.active}>
                </TabView>
        </div>
    }
}