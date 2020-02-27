const gulp  = require('gulp'),
      shell = require('gulp-shell'),
      uglify  = require('gulp-uglify'),
      concat  = require('gulp-concat'),
      pump = require('pump'),
      stylus = require('gulp-stylus'),
      sourcemaps = require('gulp-sourcemaps'),
      sprite = require('gulp-svgstore');

const project = {
    buildDest: './dist',
    buildSrc: './src'
};


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
    //.pipe(sourcemaps.init())
    .pipe(stylus({
        compress: true
    }))
    .pipe(concat('bundle.css'))
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest(project.buildDest + '/'));
});

gulp.task('watch', function () {
  gulp.watch(project.buildSrc + '/js/**/*', gulp.parallel('scripts'));
  gulp.watch(project.buildSrc + '/styles/**/*', gulp.parallel('styles'));
  gulp.watch(project.buildSrc + '/icons/**/*.svg', gulp.parallel('icons'));
});

gulp.task('icons', () =>
    gulp.src(project.buildSrc + '/icons/**/*.svg')
    .pipe(sprite())
    .pipe(gulp.dest(project.buildDest + '/'))
);

gulp.task('assets', gulp.parallel(
  'styles',
  'scripts',
  'icons'
));
gulp.task('generate', shell.task('eleventy'));
gulp.task('build', gulp.series(
  'generate',
  'assets'
));

gulp.task('serve', shell.task('eleventy --serve'));

gulp.task('serveDebug', shell.task('DEBUG=* && eleventy --serve'));

gulp.task('default', gulp.parallel('serve', 'assets', 'watch'));
gulp.task('debug', gulp.parallel('serveDebug', 'assets', 'watch'));