// Initialize modules
const gulp = require("gulp");
const { src, dest, watch, series, parallel } = require("gulp");

const plugins = require("gulp-load-plugins")({
  scope: ["devDependencies"],
});

// gulp plugins that do not begin with "gulp-"
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const browserSync = require("browser-sync").create();

// File Path Variables
const paths = {
  // src folder
  src: "src/**/*",
  srcHTML: "src/**/*.html",
  srcSCSS: "src/styles/**/*.scss",
  srcJS: "src/scripts/**/*.js",
  srcImage: "src/images/**/*",
  srcSVG: "src/svg/**/*.svg",
  // dist folder
  dist: "dist",
  distIndex: "dist/index.html",
  distCSS: "dist/styles/",
  distJS: "dist/scripts/",
  distImage: "dist/images",
  distSVG: "dist/svg",
};

// Run at start of project
function start() {
  return gulp
    .src("*.js", { read: false })
    .pipe(
      plugins.shell([
        "mkdir -p src src/images src/svg src/fonts src/styles  src/scripts src/scripts/vendors",
        "mkdir -p src/styles/0-helpers src/styles/1-plugins src/styles/2-base src/styles/3-layout src/styles/4-modules src/styles/5-templates",
        "mkdir -p dist dist/images dist/svg dist/fonts dist/styles dist/scripts",
        "touch src/index.html src/styles/main.scss src/scripts/app.js",
        "touch src/styles/0-helpers/_0-helpers.scss src/styles/1-plugins/_1-plugins.scss src/styles/2-base/_2-base.scss src/styles/3-layout/_3-layout.scss src/styles/4-modules/_4-modules.scss src/styles/5-templates/_5-templates.scss",
      ])
    );
}

// Build dist HTML
function htmlTask() {
  return src(paths.srcHTML)
    .pipe(plugins.htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(dest(paths.dist))
    .pipe(browserSync.stream());
}

// function w3cValidator() {
//   return src(paths.srcHTML)
//     .pipe(plugins.w3cjs())
//     .pipe(plugins.w3cjs.reporter());
// }

// SCSS task
function scssTask() {
  return src(paths.srcSCSS)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass())
    .pipe(plugins.postcss([autoprefixer(), cssnano()]))
    .pipe(plugins.sourcemaps.write("."))
    .pipe(dest(paths.distCSS))
    .pipe(browserSync.stream());
}

// JS task (concat + minify)
function jsTask() {
  return src(paths.srcJS)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.concat("app.js"))
    .pipe(plugins.terser())
    .pipe(plugins.sourcemaps.write("."))
    .pipe(dest(paths.distJS))
    .pipe(browserSync.stream());
}

function ImageTask() {
  return src(paths.srcImage)
    .pipe(plugins.imagemin())
    .pipe(gulp.dest(paths.distImage))
    .pipe(browserSync.stream());
}

function svgTask() {
  return src(paths.srcSVG)
    .pipe(plugins.svgmin())
    .pipe(dest(paths.distSVG))
    .pipe(browserSync.stream());
}

// Cache-busting task ~ so we do not have to clear our cache every time we make a change
// const cbString = new Date().getTime();

// function cacheBustTask() {
//   return src(["index.html"])
//     .pipe(plugins.replace(/cb=\d+/g, "cb=" + cbString))
//     .pipe(dest("."))
//     .pipe(browserSync.stream());
// }

// Watch task
function watchTask() {
  watch(
    [paths.srcSCSS, paths.srcJS, paths.srcHTML],
    parallel(scssTask, jsTask, htmlTask)
    // parallel(scssTask, jsTask, htmlTask, w3cValidator)
  );
}

// Browser Sync
function browserSyncTask() {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
  });
  watch(paths.dist).on("change", browserSync.reload);
}

// Run at beginning of project
exports.start = start;

exports.html = htmlTask;
exports.style = scssTask;
exports.script = jsTask;
exports.image = ImageTask;
exports.svg = svgTask;

// exports.cache = cacheBustTask;
// exports.browser = browserSyncTask;
exports.watch = parallel(watchTask, browserSyncTask);

exports.default = series(parallel(scssTask, jsTask), watchTask);
// exports.default = series(parallel(scssTask, jsTask), cacheBustTask, watchTask);
