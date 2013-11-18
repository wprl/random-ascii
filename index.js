// __Dependencies__
var crypto = require('crypto');

// __Private Members__

// A function that performs the actual generation of random strings
function randomAscii (options) {
  crypto.randomBytes(options.length, function (error, buffer) {
    if (error) return options.callback(new Error(error));

    var c;
    var code = '';
    var step = 256 / options.range;

    for (i=0; i < buffer.length; i++) {
      c = Math.floor(buffer[i] / step) + options.offset;
      code += String.fromCharCode(c);
    }

    options.callback(null, code);
  });
}

// __Module Definition__
module.exports = {
  lowercase: function (length, callback) {
    if (typeof callback !== 'function') throw new Error('Must supply callback');
    if (!length) return callback(new Error('Must supply length.'));
    if (length < 1) return callback(new Error('Length must be positive'));

    randomAscii({
      callback: callback,
      length: length,
      offset: 97,
      range: 26
    });
  },
  uppercase: function (length, callback) {
    if (typeof callback !== 'function') throw new Error('Must supply callback');
    if (!length) return callback(new Error('Must supply length.'));
    if (length < 1) return callback(new Error('Length must be positive'));

    randomAscii({
      callback: callback,
      length: length,
      offset: 65,
      range: 26
    });
  },
  digits: function (length, callback) {
    if (typeof callback !== 'function') throw new Error('Must supply callback');
    if (!length) return callback(new Error('Must supply length.'));
    if (length < 1) return callback(new Error('Length must be positive'));

    randomAscii({
      callback: callback,
      length: length,
      offset: 48,
      range: 10
    });
  },
  generate: function (options, callback) {
    options || (options = {});

    options.callback = options.callback || callback;

    if (typeof options.callback !== 'function') throw new Error('Must supply callback');
    if (!options.length) return callback(new Error('Must supply length.'));
    if (options.length < 1) return callback(new Error('Length must be positive'));
    if (options.offset < 0) return callback(new Error('Offset must be positive or zero'));
    if (options.offset > 255) return callback(new Error('Offset must be 255 or under'));
    if (!options.range) return callback(new Error('Must supply range'));
    if (options.range < 1) return callback(new Error('Range must be positive'));
    if (options.offset + options.range > 255) return callback(new Error('Range + offset > 255'));

    randomAscii(options);
  }
};
