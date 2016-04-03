'use strict'

import gulp from 'gulp'
import webpack from 'webpack'
import webpackConfig from './webpack.config.js'
import WebpackDevServer from 'webpack-dev-server'
import gutil from 'gulp-util'
import del from 'del'
import sass from 'gulp-sass'

gulp.task('default', ['webpack-dev-server'])

gulp.task('webpack', (callback) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err)
    gutil.log('[webpack]', stats.toString({
        // output options
    }))
    callback()
  })
})

gulp.task('clean', () => {
  return del('./public/**/*')
})

gulp.task('html', () => {
  return gulp.src('./src/index.html').pipe(gulp.dest('./public'))
})

gulp.task('styles', () => {
  return gulp.src('./src/main.scss').pipe(sass()).pipe(gulp.dest('./public'))
})

gulp.task('webpack-dev-server', ['clean', 'html', 'styles', 'webpack'], (callback) => {
  const compiler = webpack(webpackConfig)
  const port = '9000'
  const devServerOptions = {
    contentBase: './public',
    host: '0.0.0.0',
    port: port
  }

  new WebpackDevServer(compiler, devServerOptions).listen(9000, 'localhost', (_err) => {
    console.log(`Server started on port ${port}`)
  })
})
