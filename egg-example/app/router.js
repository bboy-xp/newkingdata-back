'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/adduserdata', controller.home.adduserdata);
  router.get('/getTableList', controller.home.getTableList);
};
