/**
 * Created by cuss on 2016/7/8.
 */
import Utils from './SGUtils'
let defaults = {
    headers:{
        Accept:'application/json'
    },
    method:'GET',
    dataType:'json'
};
let http = {
    request(data){
        let params = Object.assign(defaults,data);
        var {method,url,type,dataType,success,error,headers} = params;
        let promise = new Promise(function(resolve, reject){
            let client = new XMLHttpRequest();
            client.open(method, url);
            client.onreadystatechange = handler;
            client.responseType = dataType;
            for(var j in headers){
                client.setRequestHeader(j,headers[j]);
            }
            client.send();
            function handler() {
                if (this.readyState !== 4) {
                    return;
                }
                if (this.status === 200) {
                    if(Utils.isFunction(success)){
                        success(this.response);
                    }
                    resolve(this.response);
                } else {
                    if(Utils.isFunction(error)){
                        error(this.response);
                    }
                    reject(new Error(this.statusText));
                }
            };
        });

        return promise;
    },
    allReques(paramsArr){
        let promises;
        promises =  paramsArr.map(item=>{
            return http.request(item);

        });

        return  Promise.all(promises);
    }


};

export default  http;