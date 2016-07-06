var gulp = require("gulp");
var gutil = require("gulp-util");   //utils
var clean = require('gulp-clean'); //clean
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");//client-server
var webpackConfig = require("./webpack.config"); //config
var gulpWebpack = require('gulp-webpack');


gulp.task("default", ["webpack-dev-server",'build']);

gulp.task("webpack-dev-server", function(callback) {
    var myConfig = Object.create(webpackConfig); //create config object
    myConfig.devtool = "source-map";
    myConfig.debug = true;//start debug

    // Start a webpack-dev-server
    new WebpackDevServer(webpack(myConfig)).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        else gutil.log("[webpack-dev-server]", "http://localhost:8080/build/index.html");
    });

    gulp.watch(["app/**",'build/**'], ['build']);

});

gulp.task("dist",function(){
    //find all files  and dest to dist
    return gulp.src('app/**')
        .pipe(gulpWebpack(require('./webpack.config.js') ))
        .pipe(gulp.dest('dist/'));
});

gulp.task("build",function(){
    //find all files  and dest to dist
    gulp.src('app/**')
        .pipe(gulpWebpack(require('./webpack.production.config.js') ))
        .pipe(gulp.dest('dist/'));
    // find build all files except html and dest to dist
    gulp.src(["build/*","!build/*.html"])
        .pipe(gulp.dest('dist/'));
});

//clean dist files
gulp.task("cleanDist",function(){
    gulp.src("dist",{read: false})
        .pipe(clean());
});





