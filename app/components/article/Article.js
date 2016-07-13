/**
 * Created by cuss on 2016/7/12.
 */
import React from 'react';

require('./Article.scss');

export default  class Article extends React.Component{
    // 用户点击的时候 查看详情 传递元素进去
    render(){
        console.log('context from parents',this.context.data);
        return (<div className='article__wrapper'>
                {this.props.name}

            </div>)
    }
}
Article.contextTypes = {
    data: React.PropTypes.array
};
