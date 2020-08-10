'use strict';
const gulp        = require("gulp");
const sass        = require("gulp-sass");
const uglify      = require('gulp-uglify');
const concat      = require('gulp-concat');
const responsive  = require('gulp-responsive');
const del         = require('del');

gulp.task('cleanOutput', function(){
  return del(['_site/**', '!_site/'], {force:true});
});

/*
  generate the css with sass
*/
gulp.task('css', function() {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

// gulp.task('cleanImages', function(){
//   return del(['_site/img/**', '!_site/img'], {force:true});
// });

gulp.task('resize', function () {
  return gulp
    .src('src/img/blog/*.{png,jpg}')
    .pipe(
      responsive({
        // produce multiple images from one source
        '*.png': [
          // {
          //   width: 1280,
          //   rename: {suffix: '-1280'}
          // },
          {
            width: 960,
            rename: {suffix: '-960'}
          },
          {
            width: 640,
            rename: {suffix: '-640'}
          },
          {
            width: 480,
            rename: {suffix: '-480'}
          },
          {
            width: 320,
            rename: {suffix: '-320'}
          },
          {
            width: 160,
            rename: {suffix: '-160'}
          }]
      }, {
        quality: 70,
        progressive: true,
        withMetadata: false,
        skipOnEnlargement: true,
        withoutEnlargement: true,
        errorOnUnusedConfig: false,
        errorOnUnusedImage: false,
        errorOnEnlargement: false
    }))
    .pipe(gulp.dest('_site/img/blog'))
})

/*
 Uglify our javascript files into one.
 Use pump to expose errors more usefully.
*/
gulp.task('js', function() {
  return gulp.src("./src/js/**/*.js")
    .pipe(concat('hawksworx.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./src/_includes/js'));
});

gulp.task('copyBootstrap', function () {
    return gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('./src/css/'));
});

gulp.task('copyFontAwesome', function () {
  return gulp.src('./node_modules/@fortawesome/fontawesome-free/css/all.min.css')
      .pipe(gulp.dest('./src/css/'));
});
gulp.task('copyFontAwesomeFonts', function () {
  return gulp.src('./node_modules/@fortawesome/fontawesome-free/webfonts/*')
      .pipe(gulp.dest('./src/webfonts/'));
});


/*
  Watch folders for changess
*/
gulp.task("watch", function() {
  gulp.watch('./src/scss/**/*.scss', gulp.parallel('css'));
  gulp.watch('./src/js/**/*.js', gulp.parallel('js'));
});


/*
  Let's build this sucker.
*/
gulp.task('build', gulp.series(
  'cleanOutput',
  'css',
  'js',
  'copyBootstrap',
  'copyFontAwesome',
  'copyFontAwesomeFonts',
  'resize'
));

// gulp.task('build', ['css', 'js', 'copyBootstrap']);