var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('build', shell.task([
    'npm run build-gitbook'
]));

gulp.task('deploy-ghpages', ['build'], shell.task([
    'npm run deploy-ghpages'
]));

gulp.task('deploy-gitbook', shell.task([
    'git push --force gitbook master'
]));

gulp.task('default',['build','deploy-ghpages']);

gulp.task('iaas', shell.task([

    'git fetch --all',
    'git reset --hard origin/gh-pages',
    'git checkout gh-pages'

]));