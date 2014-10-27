'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var nmq = require('no-media-queries');

module.exports = function (opts, rewokOts) {
  opts = opts ? opts : {};
  rewokOts = rewokOts ? rewokOts : {};

  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      this.emit('error', new gutil.PluginError('gulp-no-media-queries', 'Streaming not supported'));
      return cb();
    }

    try {
      file.contents = nmq(file.contents, opts, rewokOts);
    } catch (err) {
      this.emit('error', new gutil.PluginError('gulp-no-media-queries', err));
    }

    this.push(file);
    cb();
  });
};
