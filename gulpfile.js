const gulp = require("gulp");
const rev = require("gulp-rev"); // Không cần `.default`
const revReplace = require("gulp-rev-replace");

gulp.task("revision", function () {
    return gulp.src(["styles.css", "script.js"])
        .pipe(rev())
        .pipe(gulp.dest("dist"))
        .pipe(rev.manifest())
        .pipe(gulp.dest("dist"));
});

gulp.task("replace", function () {
    const manifest = gulp.src("dist/rev-manifest.json");
    return gulp.src("index.html")
        .pipe(revReplace({ manifest: manifest }))
        .pipe(gulp.dest("dist"));
});

gulp.task("default", gulp.series("revision", "replace"));
