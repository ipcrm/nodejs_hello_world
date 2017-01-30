// ===================================================
// IMPORTANT: only for production
// total.js - web application framework for node.js
// http://www.totaljs.com
// ===================================================

var fs = require('fs');
var options = {};

options.ip   = "0.0.0.0";
options.port = 8000;

require('total.js').http('release', options);
