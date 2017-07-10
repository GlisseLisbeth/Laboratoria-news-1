//Plugins utilizados

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
	nodemon = require('gulp-nodemon');
    browserSync = require('browser-sync').create();

gulp.task('html', ()=>{
	gulp.src("./src/*.html")
	.pipe(gulp.dest("./public"))
	.pipe(browserSync.stream());
});


gulp.task('styles', function () {
    gulp.src("./src/assets/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe( sass({
            outputStyle:'compressed',
			sourceComments: true
          }))
   .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
   .pipe(sourcemaps.write('./maps'))
   .pipe(gulp.dest("./public/assets/css/"))
   .pipe(notify({ title: "SASS", message: "OK: Archivo compilado" }))
   .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
    return gulp.src('./src/assets/js/**/*.js')
    .pipe(concat('app.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('./public/assets/js/'));
});

gulp.task('img', ()=>{
	gulp.src('./src/assets/img/**/*.{jpg,png}')	
	.pipe(gulp.dest('./public/assets/img/'))
});




gulp.task('browser-sync',['nodemon'], function() {
    browserSync.init({
        injectChanges: true,
        files: ['/src/*.html', './public/**/*.{html,css,js,png,jpg}'],
       // server: "./dist/",
	
		proxy: {
			target: 'localhost:3000',
			ws:true

		}

    });
});-


gulp.task('nodemon', function (cb) {
    var callbackCalled = false;
    return nodemon({script: './server.js'}).on('start', function () {
        if (!callbackCalled) {
            callbackCalled = true;
            cb();
        }
    });
});



gulp.task('watch', function() {
	gulp.watch('./src/*.html',['html']); //vigila las tareas en html
    gulp.watch('./src/assets/scss/**/*.scss', ['styles']); // Vigila cambios en los estilos
    gulp.watch('./src/assets/js/**/*.js', ['scripts']); //Vijila cambios en todo los scripts
	gulp.watch('./src/assets/img/**/*.{png,jpg}', ['img']); //Vijila cambios en todo los scripts
});

gulp.task('default', ['styles', 'scripts', 'browser-sync', 'watch','html','img']);
