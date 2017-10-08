var gulp = require('gulp'),
    gutil = require('gulp-util'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    htmlReplace = require('gulp-html-replace'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    cssmin = require('gulp-cssmin'),
    browserSync = require('browser-sync').create(),
    csslint = require('gulp-csslint'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass');

gulp.task('limpar', function() {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('limpar-desenvolvimento', function() {
    return gulp.src('app/css/*')
        .pipe(clean());
});

gulp.task('copiar', ['limpar'], function() {
    return gulp.src('app/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('compila-html-js', ['copiar'], function() {
    return gulp.src('dist/*.html')
        .pipe(usemin({
            'js': [uglify],
            'css': [autoprefixer, cssmin]
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('compila-sass-producao', ['compila-html-js'], function() {
    return gulp.src('app/scss/*')
        .pipe(sass().on('error', function(error) {
            console.log(error.message);
        }))
        .pipe(gulp.dest('app/css'));
});

gulp.task('compila-sass-desenvolvimento', ['limpar-desenvolvimento'], function() {
    return gulp.src('app/scss/*')
        .pipe(sass().on('error', function(error) {
            console.log(error.message);
        }))
        .pipe(gulp.dest('app/css'));
});

gulp.task('iginora-diretorio', ['compila-sass-producao'], function() {
    return gulp.src('dist/scss')
        .pipe(clean());
});

gulp.task('start-dev', ['compila-sass-desenvolvimento'], function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });
    gulp.watch('app/**/*').on('change', browserSync.reload);
    gulp.watch('app/scss/*', ['compila-sass-desenvolvimento']);
});

gulp.task('compila', ['iginora-diretorio'], function() {
    return gulp.start('start-dev');
});

gulp.task('default', ['compila'], function() {
    return gutil.log('Gulp compilando...');
});