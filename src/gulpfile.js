var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('routing', shell.task([
    'node routing.js'
]));