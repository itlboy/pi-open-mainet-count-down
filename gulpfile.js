const gulp = require("gulp");
const rev = require("gulp-rev");
const revReplace = require("gulp-rev-replace");

// Task copy file ảnh & các file tĩnh vào dist/
gulp.task("copyStaticFiles", function () {
    return gulp.src(["pi.webp"]) // Copy ảnh pi.webp 
        .pipe(gulp.dest("dist"));
});

// Task tạo phiên bản file CSS & JS
gulp.task("revision", function () {
    return gulp.src(["styles.css", "script.js"])
        .pipe(rev())
        .pipe(gulp.dest("dist"))
        .pipe(rev.manifest())
        .pipe(gulp.dest("dist"));
});

// Task thay thế đường dẫn phiên bản mới vào HTML
gulp.task("replace", function () {
    const manifest = gulp.src("dist/rev-manifest.json");
    return gulp.src("index.html")
        .pipe(revReplace({ manifest: manifest }))
        .pipe(gulp.dest("dist"));
});

// Task mặc định: Chạy cả copyStaticFiles + revision + replace
gulp.task("default", gulp.series("copyStaticFiles", "revision", "replace"));
