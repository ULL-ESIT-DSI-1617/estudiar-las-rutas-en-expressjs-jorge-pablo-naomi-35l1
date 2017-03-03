var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('ejemplo1', shell.task([
    'node ejemplo1.js'
]));