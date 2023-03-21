const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");

function compilaSass() {
  return gulp
    .src("./source/styles/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./build/styles"));
}

function padrao(callback) {
  console.log("Executando via gulp");
  callback();
}

function aprendendo(callback) {
  console.log("Estou aprendendo a usar o gulp!");
  callback();
}

exports.default = gulp.series(padrao, aprendendo);
exports.aprendendo = aprendendo;
exports.sass = compilaSass;
exports.watch = function () {
  gulp.watch(
    "./source/styles/*.scss",
    { ignoreInitial: false },
    gulp.series(compilaSass)
  );
};
