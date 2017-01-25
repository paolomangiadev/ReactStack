import _ from 'lodash';
import del from 'del';
import gulp from 'gulp';
import babel from 'gulp-babel';
import runSequence from 'run-sequence';
import gulpLoadPlugins from 'gulp-load-plugins';
import lazypipe from 'lazypipe';
import nodemon from 'nodemon';
import browserify from 'gulp-browserify';
import browserSync from 'browser-sync';

browserSync.create()
var plugins = gulpLoadPlugins(); // carica plugin di gulp
var serverPath = 'server' // define cartella server

const paths = {
    server: {
        scripts: [
          `${serverPath}/**/!(*.spec|*.integration).js` // include di tutti gli script [no integration tests]
        ]
    },
    dist: 'dist'
};

let transpileServer = lazypipe()
    .pipe(plugins.sourcemaps.init)
    .pipe(plugins.babel)
    .pipe(plugins.sourcemaps.write, '.');

gulp.task('clean:dist', () => {
    return del([`${paths.dist}`], {dot: true})
});

gulp.task('transpile:server', ['clean:dist'], () => {
    return gulp.src(_.union(paths.server.scripts)) // cartella di partenza dei file non compilati
        .pipe(transpileServer()) // transpile dei file babel
        .pipe(gulp.dest(`${paths.dist}/${serverPath}`)); // cartella di destinazione build (dist/server)
});


gulp.task('start:server', () => {
    process.env.NODE_ENV = process.env.NODE_ENV || 'development'; // set dev
    nodemon(`-w ${serverPath} ${serverPath}`); // lancia change listener nodemon
});

gulp.task('serve', cb => {
    runSequence(['clean:dist', 'transpile:server', 'start:server'], // ordine di lancio tasks gulp
        //'watch',
        cb);
});
