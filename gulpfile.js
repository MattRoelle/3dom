var gulp   = require("gulp")
   ,wrap   = require("gulp-wrap-exports")
   ,concat = require("gulp-concat");

gulp.task("build", function() {
  return gulp.src("src/*")
             .pipe(concat("3dom.min.js"))
             .pipe(wrap({ name: "threedom" }))
             .pipe(gulp.dest("./dist/"));
});

gulp.task("default", ["build"]);
