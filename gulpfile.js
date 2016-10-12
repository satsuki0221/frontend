
var gulp        = require('gulp');
var compass     = require('gulp-compass');
var browserSync = require('browser-sync').create();
var babel       = require("gulp-babel");
var plumber     = require('gulp-plumber');

gulp.task('default', function(){
	gulp.watch('./public/sass/**/*.scss', ["compass"]);
	gulp.watch("./public/es6/**/*.js", ["js"]);
	gulp.run('browserSync');
});


gulp.task("js", function() {
	gulp.src("./public/es6/**/*.js")
		.pipe(plumber())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./public/js'));
});

gulp.task('browserSync', function() {
	browserSync.init({
		files: [
			'./public/**/*.html',
			'./public/**/*.php',
			'./public/**/*.css',
			'./public/js/**/*',
			'./public/img/**/*'
		],
		proxy: 'http://mylocal.com/frontend/public/',
	});
});

gulp.task('compass', function(){
	gulp.src('./public/sass/**/*.scss').pipe(compass({
		config_file: './public/config.rb',
		comments: false,
		css: './public/stylesheets/',
		sass: './public/sass/'
	}));
});
