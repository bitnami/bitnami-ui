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
const compileDocs = () => {
  return gulp.src(join('config.yml'))
    .pipe(aigis());
}

const copyImages = () => {
  return gulp.src([`${imageDist}/*.png`, `${imageDist}/*.svg`])
    .pipe(gulp.dest(`./assets/images`));
}

const watchDocs = () => {
  return gulp.watch([
    join('../hex-core/src/**/*.scss'),
    join('../hex/src/**/*.scss'),
    join('../hex-js/dist/*.js'),
    join('docs/*.md'),
    join('docs/**/*.md'),
    join('templates/**/*.ejs'),
    join('assets/**/*.css')
  ], gulp.parallel('docs'));
}

const watchImages = () => {
  return gulp.watch(join('../hex/dist/images/*') , gulp.parallel('docs:images'));
}

// Tasks
gulp.task('docs', gulp.parallel(compileDocs));
gulp.task('docs:images', gulp.parallel(copyImages));
gulp.task('dist', gulp.parallel('docs:images', 'docs'));
gulp.task('default', gulp.series('dist', gulp.parallel(watchDocs, watchImages)));
