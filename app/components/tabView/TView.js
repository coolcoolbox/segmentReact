/**
 * Created by cuss on 2016/7/8.
 */
import React from 'react';

export default class TView extends React.Component{


    //肯定需要对应的而标题 和图标
    render(){

        return <div>
             {this.props.children}
            </div>
    }
}


TView.props = {
    child:React.PropTypes.element,
    data:React.PropTypes.array
};