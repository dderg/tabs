var gulp        = require('gulp');
var watchify    = require('watchify');
var assign      = require('lodash.assign');
var browserify  = require('browserify');
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');
var buffer      = require('vinyl-buffer');
var source      = require('vinyl-source-stream');
var babelify    = require('babelify');
var gutil       = require('gulp-util');

// add transformations here
// i.e. b.transform(coffeeify);
gulp.task('default', function () {
    var customOpts = {
        entries: ['app.js'],
        debug: true,
        transform: [babelify],
        extensions: ['.js']
    };

    var opts = assign({}, watchify.args, customOpts);
    var b = watchify(browserify(opts));

    // gulp.task('js', bundle); // so you can run `gulp js` to build the file
    b.on('update', bundle); // on any dep update, runs the bundler
    b.on('log', gutil.log); // output build logs to terminal

    function bundle() {
        return b.bundle()
            // log errors if they happen
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('all.js'))
            .pipe(buffer())
            .pipe(uglify())
            .pipe(gulp.dest('./'));
    }
    return bundle();
});
