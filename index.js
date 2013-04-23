// Dpendencies
// -----------
var crypto = require('crypto');

// Module Definition
// -----------------
module.exports = function randomAscii (options, callback) {
  options || (options = {});

  var length = options.length || 10;
  var range = options.range || 26;
  var offset = options.offset || 97;

  crypto.randomBytes(length || 10, function (error, buffer) {
    if (error) return callback(new Error(error));

    var c;
    var code = '';
    var step = 256 / (range - 1);

    for (i=0; i < length; i++) {
      c = Math.floor(buffer[i] / step) + offset;
      code += String.fromCharCode(c);
    }

    callback(null, code);
  });
};
