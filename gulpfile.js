// Libraries
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename'),
  replace = require('gulp-replace'),
  aigis = require('gulp-aigis'),
  markdown = require('gulp-markdown'),
  path = require('path'),
  join = path.join.bind(__dirname),
  config = require('./package.json');

// Variables
var dist = join('dist'),
  docs = join('docs'),
  basename = 'bitnami.ui',
  basenameComponents = basename + '.components';

// Compile Grid CSS
gulp.task('foundations', function () {
  return gulp.src(join('foundations/index.scss'))
    .pipe(replace('{VERSION}', config.version))
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
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({ basename: basenameComponents }))
    .pipe(gulp.dest(dist))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({ basename: basenameComponents, suffix: '.min' }))
    .pipe(gulp.dest(dist));
});

// Compile documentation
gulp.task('docs', ['readme-to-doc'], function() {
  gulp.src(`${docs}/config.yml`)
    .pipe(aigis());
});

// Move the README to the docs folder
gulp.task('readme-to-doc', function() {
  gulp.src(join('README.md'))
    .pipe(markdown())
    .pipe(rename({ basename: 'readme', extname: '.ejs' }))
    .pipe(gulp.dest(`${docs}/templates`));
});

// Compile all assets
gulp.task('dist', ['foundations', 'components', 'docs'], function() { });

// Default
gulp.task('default', ['dist'], function() {
  gulp.watch(join('foundations/**/*.scss') , ['foundations', 'docs']);
  gulp.watch(join('components/**/*.scss') , ['components', 'docs']);
  gulp.watch(join('docs/templates/*.ejs'), ['docs']);
  gulp.watch(join('docs/assets/css/*.css'), ['docs']);
});
