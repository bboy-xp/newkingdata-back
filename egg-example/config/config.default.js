'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1528893182693_9267';

  // add your config here
  config.middleware = [];

  exports.mongoose = {
    url: 'mongodb://127.0.0.1/NewHookKing',
    options: {}
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  return config;
};
