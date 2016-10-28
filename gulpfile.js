
var gulp        = require('gulp');
var compass     = require('gulp-compass');
var browserSync = require('browser-sync').create();
var babel       = require("gulp-babel");
var plumber     = require('gulp-plumber');
var imagemin    = require("gulp-imagemin");

gulp.task('default', function(){
	gulp.watch('./public/sass/**/*.scss', ["compass"]);
	gulp.watch("./public/es6/**/*.js", ["js"]);
	gulp.run('browserSync');
});

gulp.task('imagemin', function(){
	gulp.src(["./public/original_img/**/*.jpg" , "./public/original_img/**/*.png"])
		.pipe(imagemin())
		.pipe(gulp.dest("./public/img/"));
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
			'./public/**/*.js',
			//'./public/img/**/*'
		],
		proxy: 'http://mylocal.com/frontend/public/',
		port : 9999
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
