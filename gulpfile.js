var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var stylish = require('gulp-jscs-stylish');
var uglify = require('gulp-uglify');
var noop = function () {};

gulp.task('babel', function () {
    return gulp.src('./src/index.js')
        .pipe(jshint({
            esnext: true,
            curly: true,
            eqeqeq: true,
            forin: true,
            freeze: true,
            maxparams: 3
        }))

        .pipe(jscs())
        .on('error', noop)
        .pipe(stylish())
        .pipe(rename('tabs.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(babel())
        .pipe(rename('tabs.es5.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(uglify())
        .pipe(rename('tabs.es5.min.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    return gulp.watch('./src/index.js', ['babel'])
});

gulp.task('default', ['babel', 'watch']);