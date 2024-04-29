var gulp = require("gulp"),
    watch = require("gulp-watch"),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;
    // prefixer = require("gulp-autoprefixer"),
    uglify = require("gulp-uglify"),
    sass = require("gulp-sass"),
    cleanCSS = require("gulp-clean-css"),
    rename = require("gulp-rename"),
    plumber = require("gulp-plumber");

var path = {
    build: {
        html: "build/",
        styles: "build/styles/",
        js: "build/js/",
        img: "build/img/"
    },

    src: {
        html: "src/*.html",
        styles: ["src/styles/*.sass", "src/styles/*.css"],
        js: "src/js/*.js",
        img: "src/img/**/*.*"
    },

    watch: {
        html: "src/**/*.html",
        styles: ["src/styles/*.sass", "src/styles/*.css"],
        js: "src/js/**/*.js",
        img: "src/img/**/*.*"
    },

    clean: "./build"
};

gulp.task("html:build", function () {
    gulp.src(path.src.html)
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream:true}));
});

gulp.task("styles:build", function () {
    gulp.src(path.src.styles)
        .pipe(plumber())
        .pipe(sass())
        .pipe(cleanCSS({compatibility: "ie8"}))
        .pipe(rename({suffix: ".min"}))
        // .pipe(prefixer())
        .pipe(plumber.stop())
        .pipe(gulp.dest(path.build.styles))
        .pipe(reload({stream:true}));
});

gulp.task("js:build", function () {
    gulp.src(path.src.js)
        .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest(path.build.js));
});

gulp.task("images:build", function () {
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img));
});

gulp.task("server", function() {
    browserSync.init({
        server: {
          baseDir: "./build/"
        },
        port: 9000,
        open: true,
        notify: false
    });
});

gulp.task("build", [
    "html:build",
    "styles:build",
    "js:build",
    "images:build",
]);

gulp.task("watch", function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start("html:build");
    });

    watch([path.watch.styles], function(event, cb) {
        gulp.start("styles:build");
    });

    watch([path.watch.js], function(event, cb) {
        gulp.start("js:build");
    });

    watch([path.watch.img], function(event, cb) {
        gulp.start("images:build");
    });
});

gulp.task("clean", function (cb) {
    rimraf(path.clean, cb);
});

gulp.task("default", ["build", "watch", "server"]);