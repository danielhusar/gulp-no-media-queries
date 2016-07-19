/* global require Buffer module */
'use strict';

var rework = require('rework');
var noMedia = require('rework-no-media');
var extend = require('object-extend');
var nmq;

nmq = function(css, opts, rewokOts) {
  function inRange(queryPixels, queryType) {
    var max = Number(opts['max-width'].match(/\d*/)[0]);
    var min = Number(opts['min-width'].match(/\d*/)[0]);
    var width = Number(opts.width.match(/\d*/)[0]);

    return (width === queryPixels)
    || ((max >= queryPixels) && (queryPixels >= min));
  }

  var widthRegex = /(?:[^-]|min-|max-)width:\s*(\d*).*$/;
  var defaults = {
    type: 'all',
    width: 'X',
    'max-width': '1000000px',
    'min-width': '0px',
  };
  var isBuffer = Buffer.isBuffer(css);

  if (isBuffer) {
    css = css.toString('utf-8');
  }

  opts = extend(defaults, opts);
  css = rework(css);

  //reduce stylesheet from rules not within media queries or not matching breakpoint
  css.obj.stylesheet.rules = css.obj.stylesheet.rules.filter(function(item) {
    if (item.type !== 'media') {
      return item;
    } else if (item.media && item.media.match(widthRegex) && inRange(Number(item.media.match(widthRegex)[1]))) {
      return item;
    }

    return false;
  });

  var result = css.use(noMedia()).toString(rewokOts);
  return isBuffer ? new Buffer(result) : result;
};

module.exports = nmq;
