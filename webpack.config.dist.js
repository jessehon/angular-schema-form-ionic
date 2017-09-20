const config = require('./webpack.config.js');
const path = require('path');

config.entry = {
  'angular-schema-form-ionic': [ path.join(__dirname, 'src', 'module') ],
  'angular-schema-form-ionic-bundled': [ 'angular-schema-form', path.join(__dirname, 'src', 'module') ],
  'angular-schema-form-ionic.min': [ path.join(__dirname, 'src', 'module') ],
  'angular-schema-form-ionic-bundled.min': [ 'angular-schema-form', path.join(__dirname, 'src', 'module') ],
}

module.exports = config;
