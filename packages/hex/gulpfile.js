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

gulp.task('css', function () {
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
});

// gulp.task('embed:foundations', function () {
//   return gulp.src(join('embed/foundations.scss'))
//     .pipe(replace('{VERSION}', config.version))
//     .pipe(replace('{HEX_ENV}', environment))
//     .pipe(sass().on('error', sass.logError))
//     .pipe(rename({ basename: basename, suffix: '.embed' }))
//     .pipe(gulp.dest(dist))
//     .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
//     .pipe(rename({ basename: basename, suffix: '.embed.min' }))
//     .pipe(gulp.dest(dist));
// });

// gulp.task('embed:components', function () {
//   return gulp.src(join('embed/components.scss'))
//     .pipe(replace('{VERSION}', config.version))
//     .pipe(replace('{HEX_ENV}', environment))
//     .pipe(sass().on('error', sass.logError))
//     .pipe(rename({ basename: basenameComponents, suffix: '.embed' }))
//     .pipe(gulp.dest(dist))
//     .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
//     .pipe(rename({ basename: basenameComponents, suffix: '.embed.min' }))
//     .pipe(gulp.dest(dist));
// });

// gulp.task('embed', ['embed:foundations', 'embed:components']);

// Image tasks
gulp.task('images', function() {
  // First copy the base images as @2x
  gulp.src(join('images/*.png'))
    .pipe(rename({ suffix: '@2x' }))
    .pipe(imagemin([pngquant(pngquantOptions)]))
    .pipe(gulp.dest(imageDist));

  // Copy SVG
  gulp.src(join('images/*.svg'))
    .pipe(imagemin([imagemin.svgo(svgoOptions)]))
    .pipe(gulp.dest(imageDist));

  gulp.src(join('images/*.png'))
    .pipe(responsive({
      '*.png': {
        width: '50%'
      }
    }))
    .pipe(imagemin([pngquant(pngquantOptions)]))
    .pipe(gulp.dest(imageDist));
});

// Compile all assets
gulp.task('dist', ['css', 'images'], function() {});

// Default
gulp.task('default', ['dist'], function() {
  // Compile css
  gulp.watch([
    join('src/**/*.scss'),
    join('../hex-core/dist/*.css')
  ], ['css']);
  // Compiles images and docs
  gulp.watch([join('images/*.png'), join('images/*.svg')] , ['images']);
});
