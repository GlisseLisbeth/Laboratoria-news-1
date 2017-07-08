'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
// const browserSync = require('browser-sync').create();
const nodemon = require('gulp-nodemon');

const config = {
	source: "./src/",
	dist: "./public/"
};

const paths = {
	assets: "assets/",
	html: "/*.html",
	js: "js/**/*.js",
	components: "js/components/**.js",
	utils: "js/utils/**.js",
	sass: "scss/**/*.scss",
	img: "img/*.png",
  authors: "img/authors/*.png",
  news: "img/news/*.png",
	mainSass: "scss/main.scss",
	mainJs: "js/app.js"
};

const sources = {
	assets: config.source + paths.assets,
	html: config.source + paths.html,
	sass: paths.assets + paths.sass,
	js: paths.assets + paths.js,
	components: config.source + paths.assets + paths.components,
  utils: config.source+paths.assets+ paths.utils,
	img: paths.assets + paths.img,
  authors: paths.assets + paths.authors,
  news: paths.assets + paths.news,
	rootSass: config.source + paths.assets + paths.mainSass,
	rootJs: config.source + paths.assets + paths.mainJs
};


//configurando las tareas en gulp
gulp.task('html', ()=>{
	gulp.src(sources.html)
	.pipe(gulp.dest(config.dist));
});

gulp.task('sass', ()=>{
	gulp.src(sources.rootSass)
	.pipe(sass({
			outputStyle: "compressed"
		}).on("Error", sass.logError))
	.pipe(gulp.dest(config.dist+paths.assets+"css"));
});

gulp.task('js', ()=>{
	gulp.src([config.source+sources.utils+"get-json.js",config.source+sources.components+"header.js",config.source+sources.components+"noticias.js",config.source+sources.components+"mundo.js",config.source+sources.components+"noticia1.js", config.source+sources.js])
	.pipe(concat('app.js'))
	.pipe(browserify())
	.pipe(gulp.dest(config.dist+paths.assets+"js"))
});

gulp.task('img', ()=>{
	gulp.src([config.source+sources.img, config.source+sources.authors, config.source+sources.news])
	.pipe(gulp.dest(config.dist+paths.assets+"img"))
});

gulp.task('serve', ()=>{
	browserSync.init({
		server:{
			baseDir: config.dist
		}
	});
});
