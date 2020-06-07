const gulp = require('gulp');
const clean = require('gulp-clean');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const imageMin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

const path = {
    js: './src/js/**/*.js',
    img: './src/img/**/*.{png,jpg,jpeg,gif}',
    html: './*.html',
};

const style = () =>
    gulp.src(path.css).
    pipe(autoprefixer(['last 4 versions'], {cascade: false})).
    pipe(concat('styles.min.css')).
    pipe(cleanCSS({
      level: 2
    })).
    pipe(gulp.dest('./dist/css/')).
    pipe(browserSync.stream());

const js = () =>
    gulp.src(path.js).
    pipe(concat('main.min.js')).
    pipe(uglify()).
    pipe(gulp.dest('./dist/js/')).
    pipe(browserSync.stream());

const img = () =>
    gulp.src(path.img).
    pipe(imageMin([
      imageMin.gifsicle({interlaced: true}),
      imageMin.mozjpeg({quality: 75, progressive: true}),
      imageMin.optipng({optimizationLevel: 5}),
      imageMin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ])).
    pipe(gulp.dest('./dist/img/')).
    pipe(browserSync.stream());

const cleandev = () =>
    gulp.src('./dist/*', {read: false}).
    pipe(clean());

const watch = () => {
    browserSync.init({
      server: {
        baseDir: './'
      },
    });

  gulp.watch(path.css, style);
  gulp.watch(path.js, js);
  gulp.watch(path.html, browserSync.reload)
};

gulp.task('cleandev', cleandev);
gulp.task('watch', watch);
gulp.task('build', gulp.series('cleandev', gulp.parallel(style, js, img)));
gulp.task('dev', gulp.series('build', watch));
