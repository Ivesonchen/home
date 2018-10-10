'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('views/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('views'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./views/**/*.scss', ['sass']);
});