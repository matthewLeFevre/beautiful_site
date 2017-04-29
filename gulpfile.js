var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    sourcemaps    = require('gulp-sourcemaps'),
    autoprefixer  = require('gulp-autoprefixer'),
    browserSync   = require('browser-sync').create();

// Current CSS
gulp.task('css', function() {
  return gulp.src('src/**/*.scss')
    .pipe( sourcemaps.init())
    .pipe( sass().on('error', sass.logError))
    .pipe( autoprefixer( {browsers: ['last 2 versions'] }))
    .pipe( sourcemaps.write('./maps'))
    .pipe( gulp.dest('./'))
    .pipe( browserSync.stream())
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
});

gulp.task('watch', ['browserSync', 'css'], function() {
  gulp.watch('src/**/*.scss', ['css']);
});
