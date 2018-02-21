// Libraries
const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const replace = require('gulp-replace');

// Paths
const path = require('path');
const join = path.join.bind(__dirname);

// Config
const config = require('./package.json');

// Variables
var dist = join('dist'),
  basename = 'hex.core';

var environment = process.env.HEX_ENV || 'development';

// Compile CSS
gulp.task('css', function () {
  return gulp.src(join('src/index.scss'))
    .pipe(replace('{VERSION}', config.version))
    .pipe(replace('{HEX_ENV}', environment))
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({ basename: basename }))
    .pipe(gulp.dest(dist))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({ basename: basename, suffix: '.min' }))
    .pipe(gulp.dest(dist));
});

// Default
gulp.task('default', ['css'], function() {
  // Compile foundations
  gulp.watch(join('src/**/*.scss') , ['css']);
});
