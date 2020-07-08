// Initialize modules
const gulp = require("gulp");
const shell = require("gulp-shell");
const { series } = require("gulp");
const inject = require("gulp-inject");

// File Path Variables
const paths = {
  src: "src/**/*",
  srcHTML: "src/**/*.html",
  srcCSS: "src/**/*.css",
  srcJS: "src/**/*.js",
  // tmp folder
  tmp: "tmp",
  tmpIndex: "tmp/index.html", // index.html in tmp folder
  tmpCSS: "tmp/**/*.css", // css files in tmp folder
  tmpJS: "tmp/**/*.js", // js files in tmp folder
  // dist folder
  dist: "dist",
  distIndex: "dist/index.html",
  distCSS: "dist/**/*.css",
  distJS: "dist/**/*.js",
};

// Run at beginning
function start() {
  return gulp
    .src("*.js", { read: false })
    .pipe(
      shell([
        "mkdir -p src src/assets/images src/assets/fonts src/assets/styles  src/assets/scripts src/assets/scripts/vendors",
        "mkdir -p src/assets/styles/0-helpers src/assets/styles/1-plugins src/assets/styles/2-base src/assets/styles/3-layout src/assets/styles/4-modules src/assets/styles/5-templates",
        "mkdir -p tmp tmp/assets/styles tmp/assets/scripts",
        "mkdir -p dist dist/assets/images dist/assets/fonts dist/assets/styles dist/assets/scripts",
        "touch src/index.html src/assets/styles/main.scss src/assets/scripts/app.js",
        "touch src/assets/styles/0-helpers/_0-helpers.scss src/assets/styles/1-plugins/_1-plugins.scss src/assets/styles/2-base/_2-base.scss src/assets/styles/3-layout/_3-layout.scss src/assets/styles/4-modules/_4-modules.scss src/assets/styles/5-templates/_5-templates.scss",
        "echo '@import '1-helpers/1-helpers'';",
      ])
    );
}

function html() {
  return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.tmp));
}

function css() {
  return gulp.src(paths.srcCSS).pipe(gulp.dest(paths.tmp));
}

function js() {
  return gulp.src(paths.srcJS).pipe(gulp.dest(paths.tmp));
}

// Sass task

// JS concat + minify

// Cache-busting task ~ so we do not have to clear our cache every time we make a change

// Watch task

// Default task

function injectIndex() {
  const css = gulp.src(paths.tmpCSS);
  const js = gulp.src(paths.tmpJS);
  return gulp
    .src(paths.tmpIndex)
    .pipe(inject(css, { relative: true }))
    .pipe(inject(js, { relative: true }))
    .pipe(gulp.dest(paths.tmp));
}

exports.start = start;
exports.copy = series(html, css, js);
exports.inject = injectIndex;
