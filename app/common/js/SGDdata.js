/**
 * Created by cuss on 2016/7/8.
 */

import SGUrl from './SGURL';
import SGHTTP from './SGHTTP.js';

let reqs = {

    login(data){
        if(!data.userName){

            return {
                res_code:'-1',
                res_msg:'用户名不能为空'
            };

        }
        return SGHTTP.request(data);
    },
    getAriticle(data){
        let params = SGUrl.getParams('articleList');
        return SGHTTP.request(params);
    }


};

export default  reqs;