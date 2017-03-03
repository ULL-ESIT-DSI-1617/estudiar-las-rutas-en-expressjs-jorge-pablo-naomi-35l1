var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('render-raiz', shell.task([
    'node render-raiz.js'
]));