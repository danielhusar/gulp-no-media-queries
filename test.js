'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var nmq = require('./index.js');

it('It should generate properly screenshot', function (cb) {
  var stream = nmq();

  stream.on('data', function(file){
    assert.equal(file.contents.toString(), 'a {\n  color: red;\n}');
    cb();
  });

  stream.write(new gutil.File({
    base: __dirname,
    path: __dirname + '/style.css',
    contents: new Buffer('a{color:red} @media all and (min-width: 500px){a{color:red;}}')
  }));

  stream.end();
});
