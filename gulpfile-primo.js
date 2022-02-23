var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
// var uglifycss = require('gulp-uglifycss');
var cssnano = require('gulp-cssnano');
const { watch } = require('gulp');


gulp.task('sass', function() {
    return gulp.src('./sass/*.sass')  // prende in questo caso tutti i file *.sass
        .pipe(sass().on('error', sass.logError)) // eseguito in caso di errore
        .pipe(gulp.dest('./css')); // tutti i file andranno messi nel file css, dopo esser stati compilati
});

// gulp.task('css', function() {
//     gulp.src('./css/*.css') //prende il seguente file
//         .pipe(uglifycss({
//             "maxLineLen": 80, //lunghezza massima per riga di 80 caratteri
//             "uglyComments": true
//     }));
//     .pipe(gulp.dest('./dist')); //destinazione dopo la compilazione
// });

gulp.task('cssnano', function() {
    return gulp.src('./css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./out'));
});

// Rendere automatica la compilazione per ogni modifica apportata
//Metodo 1
// gulp.task('run', gulp.series('sass','cssnano'));

// gulp.task('watch', function(){
//     gulp.watch('./sass/*.sass', gulp.series('sass'));
//     gulp.watch('./css/*.css', gulp.series('cssnano'));
// });

// gulp.task('default', gulp.series('run', 'watch'));

//Metodo 2
gulp.task('default', function(){
    gulp.watch('./sass/*.sass', gulp.series('sass'));
    gulp.watch('./css/*.css', gulp.series('cssnano'));
});

//Browser sync
function browsersyncServe(cb){
    browsersyncServe.init({
        server: {
            baseDir: '.'
        }
    });
    cb();
}

function watchTask(){
    watch('*.html', browsersyncReload)
}

function browsersyncReload(cb){
    browsersyncReload.reload();
    cb();
}
