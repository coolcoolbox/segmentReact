/**
 * Created by cuss on 2016/7/8.
 */

let slice = Array.prototype.slice,
    toString = Object.prototype.toString;
let utils = {

    isArray(obj){
        let type = utils.checkType(obj);
        if(type == 'Array'){
            return true;
        }
        return false;
    },
    //判断是否是函数
    isFunction(obj){
        let type = utils.checkType(obj);
        if(type == 'Function'){
            return true;
        }
        return false;
    },
    isNumber(obj){
        return !utils.isArray( obj ) && ( obj - parseFloat( obj ) + 1 ) >= 0;
    },
    checkType(obj){
        let str = toString.call(obj);

        return str.substring(8,str.length-1);
    }

};

export default  utils;