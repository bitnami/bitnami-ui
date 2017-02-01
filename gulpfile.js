// Libraries
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename'),
  replace = require('gulp-replace'),
  config = require('./package.json');

// Folders
var dist = './dist',
  basename = 'bitnami.ui';

// Compile Grid CSS
gulp.task('foundations', function () {
  return gulp.src('./foundations/index.scss')
    .pipe(replace('{VERSION}', config.version))
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({ basename: basename }))
    .pipe(gulp.dest(dist))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({ basename: basename, suffix: '.min' }))
    .pipe(gulp.dest(dist));
});

// Compile all assets
gulp.task('dist', ['foundations'], function() { });

// Default
gulp.task('default', ['dist'], function() {
  gulp.watch('./foundations/**/*.scss' , ['foundations']);
});
