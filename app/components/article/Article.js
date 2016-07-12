/**
 * Created by cuss on 2016/7/12.
 */
import React from 'react';



export default  class Article extends React.Component{

    render(){
        return <div>
                {this.props.name}
            </div>
    }
}