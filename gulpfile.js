/**
 * Created by Luke on 2/23/2016.
 */
'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');

var paths = {
    index: './public/index.html',
    styles: './public/stylesheets/**/*.css',
    scripts: './public/scripts/**/*.js'
};

gulp.task('watch', function() {

});

gulp.task('wiredep', function() {

    // Bower components
    require('wiredep')({
        src: paths.index
    });

    // Styles
    gulp.src(paths.index)
        .pipe(inject(
            gulp.src(paths.styles),
            {
                relative: true
            }
        ))
        .pipe(gulp.dest('public'));

    // App and angular
    gulp.src(paths.index)
        .pipe(inject(
            gulp.src([paths.scripts]).pipe(angularFilesort()),
            {
                relative: true
            }
        ))
        .pipe(gulp.dest('public'));

});


gulp.task('default', ['wiredep']);
