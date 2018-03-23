// Libraries
const gulp = require('gulp');

// Docs
const aigis = require('gulp-aigis');

// Paths
const path = require('path');
const join = path.join.bind(__dirname);

// Images
const imageDist = join('../hex/dist/images');

// Compile documentation
gulp.task('docs', function() {
  gulp.src(join('config.yml'))
    .pipe(aigis());
});

// Copy images
gulp.task('docs:images', function() {
  gulp.src([`${imageDist}/*.png`, `${imageDist}/*.svg`])
    .pipe(gulp.dest(`./assets/images`));
});

// Compile all assets
gulp.task('dist', ['docs:images', 'docs'], function() {});

// Default
gulp.task('default', ['dist'], function() {
  // Compile foundations and docs
  gulp.watch([
    join('../hex-core/src/**/*.scss'),
    join('../hex/src/**/*.scss'),
    join('../hex-js/dist/*.js'),
    join('docs/*.md'),
    join('templates/**/*.ejs'),
    join('assets/**/*.css')
  ], ['docs']);
  // Copy images
  gulp.watch(join('../hex/dist/images/*') , ['docs:images']);
});
