/**
 * Created by cuss on 2016/7/13.
 */
import React from 'react';
import {withRouter} from 'react-router'

const style = {
    fontSize:'16px',
    color:"#666"
};
class WithRouterT extends React.Component{
    componentDidMount() {
        this.props.router.setRouteLeaveHook(this.props.route, () => {
            //回调 false  阻止跳转  返回true 进行跳转
            //如果返回了 字符串 则会弹出 conform 弹窗   浏览器自带的弹窗 阻止代码运行
            console.log(this);
            if (!false)
                return '暂时写死了 测试正确'
        })
    }
    render() {
        return <div style={style}>测试withRouter 新的api</div>
    }
}
export default withRouter(WithRouterT)