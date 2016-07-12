/**
 * Created by cuss on 2016/7/8.
 */

let httpPrefix = '';

let url = {

    getParams(name){
        let para = url[name];

        para.url = httpPrefix + para.url;

        return para;
    },
    login:{

    },
    logout:{

    },
    articleList:{
        url:'getArtislt.json'
    },
    articleHot:{
        url:'getArtisltHot.json'
    }

};

export default   url;