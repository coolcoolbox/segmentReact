/**
 * Created by cuss on 2016/7/12.
 */
import React from 'react';

require('./Article.scss');

export default  class Article extends React.Component{

    render(){
        return <div className='article__wrapper'>
                {this.props.name}
            </div>
    }
}