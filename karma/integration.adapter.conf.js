'use strict';

const makeConf = require('./makeconf');
const { join } = require('path');

module.exports = makeConf(join('..', 'test', 'integration', 'index.js'), null, [
  require.resolve('webrtc-adapter/out/adapter')
]);
