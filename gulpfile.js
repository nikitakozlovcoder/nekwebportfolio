'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.*')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});
gulp.task('pug', function () {
   return gulp.src('./pug/*.pug')
       .pipe(pug({
           pretty: true
       })).on('error', ()=>{})
       .pipe(gulp.dest('./'));
});
gulp.task('views', function buildHTML() {
    return gulp.src('pug/*.pug')
        .pipe(pug({
            locals: './'
        }))
});
gulp.task('watch', function () {
    gulp.watch('./sass/**/*.sass', ['sass']);
    gulp.watch('./pug/*.pug', ['pug']);
});

