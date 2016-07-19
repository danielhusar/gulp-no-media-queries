# [gulp](http://gulpjs.com)-no-media-queries [![Build Status](https://github.com/aemonge/gulp-no-media-queries)]


Forked to give ranged support.

Export the css without mediaqueries matching maximum page width.

See [no-media-queries](https://github.com/danielhusar/no-media-queries) for documentation. And added the following:

* *min-width* option. Will include all media-queries greater or equal than provided `min-width`.
* *max-width* option. Will include all media-queries lesser or equal than provided `max-width`.


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

### Min width example

```
gulp.task('css', function () {
  gulp.src('./public/*.css')
  .pipe(nmq({
    'min-width': '300px'
  }))
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

## License (Forked)
MIT © [Daniel Husar](https://github.com/danielhusar)
