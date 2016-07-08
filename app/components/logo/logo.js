/**
 * Created by cuss on 2016/7/7.
 */
import React from 'react';
import {Link} from 'React-Router';

require('./logo.scss');


export default  class Logo extends React.Component{


    render(){

        return <Link to='/Index' className='u-logo'></Link>
    }


}