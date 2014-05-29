# [gulp](http://gulpjs.com)-no-media-queries [![Build Status](https://secure.travis-ci.org/danielhusar/gulp-no-media-queries.svg?branch=master)](http://travis-ci.org/danielhusar/gulp-no-media-queries)

Export the css without mediaqueries matching maximum page width.

See [no-media-queries](https://github.com/danielhusar/no-media-queries) for documentation.

## Install

```
npm install --save-dev gulp-no-media-queries
```

## Example

```
var gulp = require('gulp');
var nmq = require('gulp-no-media-queries');

gulp.task('css', function () {
  gulp.src('./public/*.css')
  .pipe(nmq(opts, rewokOts))
  .pipe(rename({
    suffix: '.ie',
    extname: '.css'
  }))
  .pipe(gulp.dest('./public/'));
});

```

## opts

same as [no-media-queries](https://github.com/danielhusar/no-media-queries#options)

## rewokOts

same as [no-media-queries](https://github.com/danielhusar/no-media-queries#reworkoptions)

## License

MIT © [Daniel Husar](https://github.com/danielhusar)
