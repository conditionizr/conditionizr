var gulp    = require('gulp');
var karma   = require('gulp-karma');
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');
var header  = require('gulp-header');
var uglify  = require('gulp-uglify');
var plumber = require('gulp-plumber');
var clean   = require('gulp-clean');
var rename  = require('gulp-rename');
var package = require('./package.json');

var paths = {
  output : 'dist/',
  scripts : [
    'src/conditionizr.js'
  ],
  test: [
    'test/spec/**/*.js'
  ]
};

var banner = [
  '/*! ',
    '<%= package.name %> ',
    'v<%= package.version %> | ',
    '(c) ' + new Date().getFullYear() + ' <%= package.author %> |',
    ' <%= package.homepage %>',
  ' */',
  '\n'
].join('');

gulp.task('scripts', ['clean'], function() {
  return gulp.src(paths.scripts)
    .pipe(plumber())
    .pipe(header(banner, { package : package }))
    .pipe(gulp.dest('dist/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(header(banner, { package : package }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('lint', function () {
  return gulp.src(paths.scripts)
  .pipe(plumber())
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('clean', function () {
  return gulp.src(paths.output, {
    read: false
  })
  .pipe(plumber())
  .pipe(clean());
});

gulp.task('test', function() {
  return gulp.src(paths.scripts.concat(paths.test))
    .pipe(plumber())
    .pipe(karma({
      configFile: 'test/karma.conf.js'
    }))
    .on('error', function(err) {
      throw err;
    });
});

gulp.task('default', [
  'lint',
  'clean',
  'scripts',
  'test'
]);
