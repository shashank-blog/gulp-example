var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//Concat and uglify scripts
gulp.task('scripts', function() {
    return gulp.src('../../src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('../../dist/js'))
        .pipe(rename('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('../../dist/js'));
});
