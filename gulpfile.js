/**
 * Setup
 */

var gulp   = require('gulp')
    $      = require('gulp-load-plugins')({ camelize: true }),
    pkg    = require('./package.json'),
    year   = $.util.date('yyyy'),
    banner = '/*! <%= pkg.title %> v<%= pkg.version %> | (c) <%= year %> @toddmotto, @markgdyr | MIT license | conditionizr.com i*/\n',


/**
 * Tasks
 */

// Build
gulp.task('build', ['clean'], function() {
  return gulp.src('./src/conditionizr.js')
    .pipe($.jshint('.jshintrc'))
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.concat('conditionizr.js'))
    .pipe($.header(banner, {pkg: pkg}))
    .pipe(gulp.dest('./dist'))
    .pipe($.rename({suffix: '.min'}))
    .pipe($.uglify({preserveComments: 'some'}))
    .pipe(gulp.dest('./dist'))
});

// Clean
gulp.task('clean', function() {
  return gulp.src('dist', {read: false})
    .pipe($.rimraf());
});

// Default
gulp.task('default', ['build'], function () {
  return gulp.src('./test/Conditionizr-spec.js')
    .pipe($.jasmine())
});

// Watch
gulp.task('watch', function() {
  gulp.watch('./src/conditionizr.js', ['default']);
});
