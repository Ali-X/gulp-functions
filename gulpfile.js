var gulp = require("gulp"),
    concatCss = require('gulp-concat-css'),
    pref = require('gulp-autoprefixer'),
    watch = require('gulp-watch');

gulp.task('copyTask', function () {
    return gulp.src('src/**/.')
        .pipe(gulp.dest('app'))
});

gulp.task('concatTask', function () {
    return gulp.src('src/**/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest('concated'));
});

gulp.task('autoprefTask', () =>
    // gulp.src('src/**/*.css')
    gulp.src('app/**/*.css')
        .pipe(pref({
            browsers: ['last 99 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('autoprefAndConcatTask', () =>
    gulp.src('src/**/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(pref({
            browsers: ['last 99 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app'))
);

gulp.task('watchTask', () => {
    return watch('src/**/*.css', function () {
        gulp.src('src/**/*.css')
            .pipe(concatCss("bundle.css"))
            .pipe(pref({
                browsers: ['last 99 versions'],
                cascade: false
            }))
            .pipe(gulp.dest('app'))
    });
});