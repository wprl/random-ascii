random-ascii v0.0.2
===================

Generate random strings of ascii characters.

Usage
-----

    npm install random-ascii

Later,

    var ascii = require('random-ascii');
    var callback = function (error, s) { console.log(s) };

    ascii.lowercase(6, callback);
    ascii.uppercase(6, callback);
    ascii.digits(6, callback);

    ascii.generate({
      length: 12,
      range: 3,
      offset: 123,
      callback: callback
    });

Contact
-------

william@kun.io

http://kun.io

© 2013 William Riley-Land
