var gulp = require("gulp");
var sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');


function style() {
  //get the source
  return (
    gulp
      .src('./scss/style.scss')
      //process to css
      .pipe(sass())
      .pipe(gulp.dest('css'))
      //pass all the css to browser
      .pipe(browserSync.stream())
      //minify the css
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('css'))  //change the result to destination folder
  );
}
function watch() {
  //automate functions
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  //calling styles to automate
  gulp.watch("./scss/**/*.scss", style);
  gulp.watch("./**/*.html").on('change', browserSync.reload);
  gulp.watch("./js/**/*.js").on('change', browserSync.reload)
}
exports.style = style;
exports.watch = watch;