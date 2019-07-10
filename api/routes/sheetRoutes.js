'use strict';
module.exports = function(app) {
  var sheetList = require('../controllers/sheetController');

  app.route('/sheets')
    .get(sheetList.getSheets)
    .post(sheetList.createSheet);

  app.route('/sheets/:sheetId')
    .get(sheetList.getSheet)
    .put(sheetList.updateSheet)
    .delete(sheetList.deleteSheet);
};