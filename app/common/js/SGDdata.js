/**
 * Created by cuss on 2016/7/8.
 */

import SGUrl from './SGURL';
import SGHTTP from './SGHTTP.js';

let reqs = {
    request(obj) {
        let params = SGUrl.getParams(obj.key);
        return SGHTTP.request(params);
    },
    login(data) {
        if (!data.userName) {

            return {
                res_code: '-1',
                res_msg: '用户名不能为空'
            };

        }
        return SGHTTP.request(data);
    },
    getAriticle(data) {
        let params = SGUrl.getParams('articleList');
        return SGHTTP.request(params);
    },
    getNav() {
        let navs =
            [
                {
                    'text': '首页',
                    'url': '/Index',
                    className: 'index',
                    icon: 'icon-data'
                },
                {
                    'text': '问答',
                    'url': '/Answer',
                    className: 'answer',
                    icon: 'icon-data'
                },
                {
                    'text': '测试',
                    'url': '/Demo',
                    className: 'Demo',
                    icon: 'icon-data'
                }
            ];
        return navs;
    },
    getIndexTabs() {
        let tabs =
            [
                {
                    'text': '最新的',
                    'key': 'articleList',
                    className: 'tab tab1'
                },
                {
                    'text': '热门的',
                    'key': 'articleHot',
                    className: 'tab tab2'
                },
                {
                    'text': '未回答的',
                    'key': 'unAnwserd',
                    className: 'tab tab3'
                }
            ];
        return tabs;
    }


};

export default  reqs;