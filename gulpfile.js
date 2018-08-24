var gulp  = require('gulp');
var shell = require('gulp-shell');
var serve = require('gulp-serve');
var uglify  = require('gulp-uglify');
var concat  = require('gulp-concat');
var pump = require('pump');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');

const project = {
    buildDest: './dist',
    buildSrc: './src'
}


// Uglify our javascript files into one.
// Use pump to expose errors more usefully.
gulp.task('scripts', function(done) {
    pump([
        gulp.src(project.buildSrc + '/js/**/*.js'),
        concat('bundle.js'),
        uglify(),
        gulp.dest(project.buildDest + '/')
      ],
      done()
    );
});
gulp.task('styles', function() {
  return gulp.src(project.buildSrc + '/styles/index.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({
        compress: true
    }))
    .pipe(concat('bundle.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(project.buildDest + '/'));
});

gulp.task('watch', function () {
  gulp.watch(project.buildSrc + '/js/**/*', gulp.parallel('scripts'));
  gulp.watch(project.buildSrc + '/styles/**/*', gulp.parallel('styles'));
  gulp.watch(project.buildSrc + '/**/*.pug',  gulp.parallel('generate'));
});

gulp.task('assets', gulp.parallel(
  'styles',
  'scripts'
));
gulp.task('generate', shell.task('eleventy'));
gulp.task('build', gulp.series(
  'generate',
  'assets'
));
gulp.task('serve', serve({
  root: [project.buildDest],
  port: 8008,
}));

gulp.task('default', gulp.parallel('serve', 'watch', 'build'));