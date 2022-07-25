import del from 'del';
import zipPlugin from "gulp-zip";

export const zip = () => {
    del(`./${app.path.rootFolder}.zip`)
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`,{})
        .pipe(app.plugins.plumber())
        .pipe(zipPlugin(`${app.path.rootFolder}.zip`))
        .pipe(app.gulp.dest('./'))
}