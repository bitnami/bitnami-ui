// Libraries
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename'),
  replace = require('gulp-replace'),
  // Image dependencies
  responsive = require('gulp-responsive'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  // Docs
  aigis = require('gulp-aigis'),
  markdown = require('gulp-markdown'),
  path = require('path'),
  join = path.join.bind(__dirname),
  config = require('./package.json'),
  s3 = require('gulp-s3-upload')({ useIAM: true });

// Variables
var dist = join('dist'),
  imageDist = join('dist/images'),
  docs = join('docs'),
  basename = 'bitnami.ui',
  basenameComponents = basename + '.components';

var environment = process.env.BITNAMI_UI_ENV || 'development';

// PNG quant options
var pngquantOptions = {
  speed: 1
};
var svgoOptions = {
  removeViewBox: false
};

// Compile Grid CSS
gulp.task('foundations', function () {
  return gulp.src(join('foundations/index.scss'))
    .pipe(replace('{VERSION}', config.version))
    .pipe(replace('{BITNAMI_UI_ENV}', environment))
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({ basename: basename }))
    .pipe(gulp.dest(dist))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({ basename: basename, suffix: '.min' }))
    .pipe(gulp.dest(dist));
});

gulp.task('components', function () {
  return gulp.src(join('components/index.scss'))
    .pipe(replace('{VERSION}', config.version))
    .pipe(replace('{BITNAMI_UI_ENV}', environment))
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({ basename: basenameComponents }))
    .pipe(gulp.dest(dist))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({ basename: basenameComponents, suffix: '.min' }))
    .pipe(gulp.dest(dist));
});

gulp.task('embed:foundations', function () {
  return gulp.src(join('embed/foundations.scss'))
    .pipe(replace('{VERSION}', config.version))
    .pipe(replace('{BITNAMI_UI_ENV}', environment))
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({ basename: basename, suffix: '.embed' }))
    .pipe(gulp.dest(dist))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({ basename: basename, suffix: '.embed.min' }))
    .pipe(gulp.dest(dist));
});

gulp.task('embed:components', function () {
  return gulp.src(join('embed/components.scss'))
    .pipe(replace('{VERSION}', config.version))
    .pipe(replace('{BITNAMI_UI_ENV}', environment))
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({ basename: basenameComponents, suffix: '.embed' }))
    .pipe(gulp.dest(dist))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({ basename: basenameComponents, suffix: '.embed.min' }))
    .pipe(gulp.dest(dist));
});

gulp.task('embed', ['embed:foundations', 'embed:components']);

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

// Compile documentation
gulp.task('docs', ['docs:readme'], function() {
  gulp.src(`${docs}/config.yml`)
    .pipe(aigis());
});

gulp.task('docs:foundations', ['foundations'], function() {
  return gulp.start('docs');
});

gulp.task('docs:components', ['components'], function() {
  return gulp.start('docs');
});

// Move images
gulp.task('docs:images', ['images'], function() {
  gulp.src(`${imageDist}/*.png`)
    .pipe(gulp.dest(`${docs}/assets/images`));
});


// Move the README to the docs folder
gulp.task('docs:readme', function() {
  gulp.src(join('README.md'))
    .pipe(markdown({
      highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
      }
    }))
    .pipe(replace('{VERSION}', config.version))
    .pipe(rename({ basename: 'readme', extname: '.ejs' }))
    .pipe(gulp.dest(`${docs}/templates`));
});

// Compile all assets
gulp.task('dist', ['foundations', 'components', 'embed', 'images'], function() {
  gulp.start('docs:images');
  gulp.start('docs');
});

/**
 * Deploy the current project to production. We need a valid AWS config file. This task assumes
 * you have a valid credentials file.
 *
 * Check the README file for more information about deploying Bitnami UI
 */
gulp.task('publish', ['foundations', 'components', 'embed', 'images'], function() {
  // Upload CSS Files
  gulp.src(join('dist/*.css'))
    .pipe(s3({
      Bucket: 'bitnami-assets-cf',
      keyTransform: function(relative_filename) {
        return `bitnami-ui/${config.version}/${relative_filename}`;
      },
      uploadNewFilesOnly: true
    }, {
      // S3 Constructor Options, ie:
      maxRetries: 5
    }));

  // Upload images
  gulp.src(join('dist/images/*.{png,svg}'))
    .pipe(s3({
      Bucket: 'bitnami-assets-cf',
      keyTransform: function(relative_filename) {
        return `bitnami-ui/${config.version}/images/${relative_filename}`;
      }
    }, {
      // S3 Constructor Options, ie:
      maxRetries: 5
    }));
});

// Default
gulp.task('default', ['dist'], function() {
  // Compile foundations and docs
  gulp.watch(join('foundations/**/*.scss') , ['docs:foundations']);
  // Compile components and docs
  gulp.watch(join('components/**/*.scss') , ['docs:components']);
  // Compiles images and docs
  gulp.watch(join('images/*.png') , ['docs:images']);
});
