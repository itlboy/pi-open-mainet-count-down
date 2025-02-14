const gulp = require("gulp");
const rev = require("gulp-rev");
const revReplace = require("gulp-rev-replace");

// Task copy ảnh & các file tĩnh vào `dist/`
function copyStaticFiles() {
    return gulp.src("pi.webp") // Copy ảnh pi.webp
        .pipe(gulp.dest("dist")); 
}

// Task tạo phiên bản file CSS & JS
function revision() {
    return gulp.src(["styles.css", "script.js"], { base: "." }) // Giữ cấu trúc thư mục
        .pipe(rev()) // Thêm hash version
        .pipe(gulp.dest("dist"))
        .pipe(rev.manifest())
        .pipe(gulp.dest("dist"));
}

// Task thay thế đường dẫn phiên bản mới vào HTML
function replace() {
    const manifest = gulp.src("dist/rev-manifest.json");
    return gulp.src("index.html")
        .pipe(revReplace({ manifest: manifest }))
        .pipe(gulp.dest("dist"));
}

// Task mặc định chạy cả 3 bước
const build = gulp.series(copyStaticFiles, revision, replace);
exports.default = build;
