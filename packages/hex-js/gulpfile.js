// Libraries
const gulp = require('gulp');
const rename = require('gulp-rename');
const replace = require('gulp-replace');

// Webpack
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const webpackConfigProd = require('./webpack.config.prod.js');

// Paths
const path = require('path');
const join = path.join.bind(__dirname);

// Config
const config = require('./package.json');

// Variables
const dist = join('dist');
const basename = 'hex';
const environment = process.env.HEX_ENV || 'development';

// Javascript
gulp.task('js', () => {
  if (environment === 'production') {
    return gulp.src(join('src/index.js'))
      .pipe(webpackStream(webpackConfig), webpack)
      .pipe(replace('{VERSION}', config.version))
      .pipe(gulp.dest(dist))
      .pipe(webpackStream(webpackConfigProd), webpack)
      .pipe(replace('{VERSION}', config.version))
      .pipe(gulp.dest(dist));
  } else {
    return gulp.src(join('src/index.js'))
      .pipe(webpackStream(webpackConfig), webpack)
      .pipe(replace('{VERSION}', config.version))
      .pipe(gulp.dest(dist));
  }
});

// Default
gulp.task('default', ['js'], function() {
  // Compile JS
  gulp.watch(join('src/**/*.js') , ['js']);
});
