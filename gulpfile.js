const gulp = require('gulp');
const path = require('path');
const join = path.join.bind(__dirname);

// Publish
const config = require('./packages/hex/package.json');
const s3 = require('gulp-s3-upload')({ useIAM: true });

// Bucket
const bucket = process.env.BUCKET;

if (bucket == null) {
  console.error('The BUCKET variable is required!');
  process.exit(1);
}

/**
 * Deploy the current project to production.
 */
gulp.task('cdn', function() {
  // Upload CSS Files
  gulp.src([
      join('packages/hex/dist/*.css'),
      join('packages/hex-core/dist/*.css'),
      join('packages/hex-js/dist/*.js'),
      join('packages/hex-js/dist/*.js.LICENSE')
    ])
    .pipe(s3({
      Bucket: bucket,
      keyTransform: function(relative_filename) {
        return `hex/${config.version}/${relative_filename}`;
      },
      uploadNewFilesOnly: true
    }, {
      // S3 Constructor Options, ie:
      maxRetries: 5
    }));

  // Upload images
  gulp.src(join('packages/hex/dist/images/*.{png,svg}'))
    .pipe(s3({
      Bucket: bucket,
      keyTransform: function(relative_filename) {
        return `hex/${config.version}/images/${relative_filename}`;
      }
    }, {
      // S3 Constructor Options, ie:
      maxRetries: 5
    }));
});
