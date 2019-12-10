// Libraries
const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const replace = require('gulp-replace');

// Image dependencies
const responsive = require('gulp-responsive');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

// Paths
const path = require('path');
const join = path.join.bind(__dirname);

// Config
const config = require('./package.json');

// Variables
const dist = join('dist');
const imageDist = join('dist/images');
const basename = 'hex';

var environment = process.env.HEX_ENV || 'development';

// PNG quant options
var pngquantOptions = {
  speed: 1
};
var svgoOptions = {
  removeViewBox: false
};

const compileCss = () => {
  return gulp.src(join('src/index.scss'))
    .pipe(replace('{VERSION}', config.version))
    .pipe(replace('{HEX_ENV}', environment))
    .pipe(sass().on('error', sass.logError))
    .pipe(replace('{VERSION}', config.version)) // Replace the {VERSION} in the core import
    .pipe(rename({ basename: basename }))
    .pipe(gulp.dest(dist))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(replace('{VERSION}', config.version)) // Replace the {VERSION} in the core import
    .pipe(rename({ basename: basename, suffix: '.min' }))
    .pipe(gulp.dest(dist));
}

const compressPNG = () => {
  // First copy the base images as @2x
  return gulp.src(join('images/*.png'))
    .pipe(rename({ suffix: '@2x' }))
    .pipe(imagemin([pngquant(pngquantOptions)]))
    .pipe(gulp.dest(imageDist));
}

const compressPNGSmall = () => {
  return gulp.src(join('images/*.png'))
    .pipe(responsive({
      '*.png': {
        width: '50%'
      }
    }))
    .pipe(imagemin([pngquant(pngquantOptions)]))
    .pipe(gulp.dest(imageDist));
}

const compressSVG = () => {
  return gulp.src(join('images/*.svg'))
    .pipe(imagemin([imagemin.svgo(svgoOptions)]))
    .pipe(gulp.dest(imageDist));
}

const watchCss = () => {
  return gulp.watch([
    join('src/**/*.scss'),
    join('../hex-core/dist/*.css')
  ], gulp.parallel('css'));
}

const watchImages = () => {
  // Compiles images and docs
  return gulp.watch([
    join('images/*.png'),
    join('images/*.svg')
  ], gulp.parallel('images'));
}

const compileEmbedCSS = () => {
  return gulp.src(join('embed/index.scss'))
    .pipe(replace('{VERSION}', config.version))
    .pipe(replace('{HEX_ENV}', environment))
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({ basename: basename, suffix: '.embed' }))
    .pipe(gulp.dest(dist))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({ basename: basename, suffix: '.embed.min' }))
    .pipe(gulp.dest(dist));
}

// Tasks
gulp.task('embed', gulp.parallel(compileEmbedCSS));
gulp.task('css', gulp.parallel(compileCss, 'embed'));
gulp.task('images', gulp.parallel(compressPNG, compressPNGSmall, compressSVG));
gulp.task('dist', gulp.parallel('css', 'images'));
gulp.task('default', gulp.series('dist', gulp.parallel(watchCss, watchImages)));
