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
import gutil from 'gulp-util';
import webpack from 'webpack-stream';
import child_process from 'child_process';
import clean from 'gulp-clean';
var execute = child_process.exec;
// import webpackconfig from './webpack.config.js';

browserSync.create()
var plugins = gulpLoadPlugins(); // carica plugin di gulp
var serverPath = './server'; // define cartella server
var clientPath = './client/public'; // define cartella server
var webpack_config = 'dist/webpack.prod.config.js';
var webpack_root = 'webpack.prod.config.js';

const paths = {
    server: {
        scripts: [
          `${serverPath}/**/!(*.spec|*.integration).js` // include di tutti gli script server [no integration tests]
        ]
    },
    client: {
        scripts: [
          `${clientPath}/**/!(*.spec|*.integration).js` // include di tutti gli script client [no integration tests]
        ],
        views: [
          `${clientPath}/**/*.html` // include di tutti gli script client [no integration tests]
        ],
        configs: [`${clientPath}/**/*.json`],
        assets: [
          `${clientPath}/src/**/*`
        ],
        styles: [
          `${clientPath}/{components,views,external-libraries}/**/*.css`,
          `${clientPath}/{components,views,external-libraries}/**/*.scss`
        ],
        mainstyle: [`${clientPath}/*.css`],
    },
    dist: '.tmp',
    prod: 'dist',
    webpack: `${webpack_config}`
};

let transpileServer = lazypipe()
    .pipe(plugins.sourcemaps.init)
    .pipe(plugins.babel, {
        plugins: [
            'transform-class-properties',
            'transform-runtime'
        ]
    })
    .pipe(plugins.sourcemaps.write, '.');

let transpileClient = lazypipe()
    .pipe(plugins.sourcemaps.init)
    .pipe(plugins.babel)
    .pipe(plugins.sourcemaps.write, '.');


gulp.task('clean:dist', () => {
    return gulp.src(`${paths.dist}`, {read: false})
		.pipe(clean());
});

gulp.task('transpile:server', ['clean:dist'], () => {
    return gulp.src(_.union(paths.server.scripts)) // cartella di partenza dei file non compilati
        .pipe(transpileServer()) // transpile dei file babel
        .pipe(gulp.dest(`${paths.dist}/${serverPath}`)); // cartella di destinazione build (dist/server)
});

gulp.task('transpile:client', ['transpile:server'], function() {
    return gulp.src(_.union(paths.client.scripts))
        .pipe(transpileClient())
        // .pipe(webpack(webpackconfig))
        .pipe(gulp.dest(`${paths.dist}/${clientPath}`));
});

gulp.task('copy:assets', ['transpile:client'], function() {
    return gulp.src(_.union(paths.client.assets))
        .pipe(gulp.dest(`${paths.dist}/${clientPath}/src`));
});

gulp.task('copy:styles', ['copy:assets'], function() {
    return gulp.src(_.union(paths.client.styles))
        .pipe(gulp.dest(`${paths.dist}/${clientPath}`));
});

gulp.task('copy:mainstyle', ['copy:styles'], function() {
    return gulp.src(_.union(paths.client.mainstyle))
        .pipe(gulp.dest(`${paths.dist}/${clientPath}`));
});

gulp.task('copy:configs', ['copy:mainstyle'], function() {
    return gulp.src(_.union(paths.client.configs))
        .pipe(gulp.dest(`${paths.dist}/${clientPath}`));
});

gulp.task('build:client', ['copy:configs'], function() {
    return gulp.src(_.union(paths.client.views))
        .pipe(gulp.dest(`${paths.dist}/${clientPath}`));
});

gulp.task('start:server', ['build:client'], () => {
    process.env.NODE_ENV = process.env.NODE_ENV || 'development'; // set dev
    nodemon(`-w ${serverPath} ${serverPath}`); // lancia change listener nodemon
});

gulp.task('serve', cb => {
    runSequence(['clean:dist',
                 'transpile:server',
                 'start:server',
                 'transpile:client',
                 'copy:assets',
                 'copy:styles',
                 'copy:configs',
                 'copy:mainstyle',
                 'build:client'
               ], // ordine di lancio tasks gulp
        //'watch',
        cb);
});


// BUILD tasks

//clean the distribution
gulp.task('clean:production-dist', () => {
  return gulp.src(`${paths.dist}`, {read: false})
  .pipe(clean());
});

//transpile the production server
gulp.task('transpile:production-server', ['clean:production-dist'], () => {
    return gulp.src(_.union(paths.server.scripts)) // cartella di partenza dei file non compilati
        .pipe(transpileServer()) // transpile dei file babel
        .pipe(gulp.dest(`${paths.prod}/${serverPath}`)); // cartella di destinazione build (dist/server)
});

//transpile the production client
gulp.task('transpile:production-client', ['transpile:production-server'], function() {
    return gulp.src(_.union(paths.client.scripts))
        .pipe(transpileClient())
        // .pipe(webpack(webpackconfig))
        .pipe(gulp.dest(`${paths.prod}/${clientPath}`));
});

//copy assets in production folder
gulp.task('copy:production-assets', ['transpile:production-client'], function() {
    return gulp.src(_.union(paths.client.assets))
        .pipe(gulp.dest(`${paths.prod}/${clientPath}/src`));
});

//copy styles in production folder
gulp.task('copy:production-styles', ['copy:production-assets'], function() {
    return gulp.src(_.union(paths.client.styles))
        .pipe(gulp.dest(`${paths.prod}/${clientPath}`));
});

//copy layout style in production folder
gulp.task('copy:production-mainstyle', ['copy:production-styles'], function() {
    return gulp.src(_.union(paths.client.mainstyle))
        .pipe(gulp.dest(`${paths.prod}/${clientPath}`));
});

gulp.task('copy:production-configs', ['copy:production-mainstyle'], function() {
    return gulp.src(_.union(paths.client.configs))
        .pipe(gulp.dest(`${paths.prod}/${clientPath}`));
});

//copy views in production folder
gulp.task('build:production-client', ['copy:production-configs'], function() {
    return gulp.src(_.union(paths.client.views))
        .pipe(gulp.dest(`${paths.prod}/${clientPath}`));
});

//copy webpack production config in production folder
gulp.task('copy:production-webpack', ['build:production-client'], function() {
    return gulp.src(webpack_root)
        .pipe(gulp.dest(`${paths.prod}/`));
});

gulp.task('build:prod', ['copy:production-webpack'], function (cb) {
  execute('cd \dist && set NODE_ENV=production && webpack -p --config webpack.prod.config.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

//clean the distribution
gulp.task('clean:public-folder', ['build:prod'], () => {
    return gulp.src(`${paths.dist}/client/public`, {read: false})
    .pipe(clean());
});

gulp.task('build:production', cb => {
    runSequence(['clean:production-dist',
                 'transpile:production-server',
                 'transpile:production-client',
                 'copy:production-assets',
                 'copy:production-styles',
                 'copy:production-mainstyle',
                 'copy:production-configs',
                 'build:production-client',
                 'copy:production-webpack',
                 'build:prod',
                 'clean:public-folder',
               ], // ordine di lancio tasks gulp
        //'watch',
        cb);
});
