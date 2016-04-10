'use strict'

import gulp from 'gulp'
import webpack from 'webpack'
import webpackConfig from './webpack.config.js'
import WebpackDevServer from 'webpack-dev-server'
import gutil from 'gulp-util'
import del from 'del'
import sass from 'gulp-sass'
import sequence from 'gulp-sequence'
import RevAll from 'gulp-rev-all'
import awspublish from 'gulp-awspublish'
import cloudfront from 'gulp-cloudfront'

const aws = {
  params: {
    Bucket: gutil.env.s3Bucket
  },
  accessKeyId: gutil.env.awsKeyId,
  secretAccessKey: gutil.env.awsSecretAccessKey,
  distributionId: gutil.env.cfDistributionId,
  region: gutil.env.awsRegion
}

let publisher = awspublish.create(aws)
let headers = {'Cache-Control': 'max-age=315360000, no-transform, public'}

gulp.task('default', sequence('webpack-dev-server'))

gulp.task('publish', () => {
  const revAll = new RevAll()
  return gulp.src('public/**')
      .pipe(revAll.revision())
      .pipe(awspublish.gzip())
      .pipe(publisher.publish(headers))
      .pipe(publisher.cache())
      .pipe(awspublish.reporter())
      .pipe(cloudfront(aws))
})

gulp.task('deploy', (callback) => {
  sequence('build', 'publish')(callback)
})

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

gulp.task('sf-design-system', () => {
  return gulp.src(
    [
      'node_modules/@salesforce-ux/design-system/assets/**',
      '!node_modules/@salesforce-ux/design-system/assets/{icons,icons/**}',
      '!./node_modules/@salesforce-ux/design-system/assets/**/*.txt'
    ]
  ).pipe(gulp.dest('./public/sf-ux'))
})

gulp.task('html', () => {
  return gulp.src('./src/index.html').pipe(gulp.dest('./public'))
})

gulp.task('styles', () => {
  return gulp.src('./src/main.scss').pipe(sass()).pipe(gulp.dest('./public'))
})

gulp.task('build', (callback) => {
  sequence(['clean'], ['sf-design-system', 'html', 'styles'], ['webpack'])(callback)
})

gulp.task('webpack-dev-server', ['build'], (callback) => {
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
