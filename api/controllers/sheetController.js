'use strict';

var mongoose = require('mongoose'),
Sheet = mongoose.model('Sheets');

exports.getSheets = function(req, res) {
  Sheet.find({}, function(err, sheet) {
    if (err)
      res.send(err);
    res.json(sheet);
  });
};

exports.createSheet = function(req, res) {
  var newSheet = new Sheet(req.body);
  newSheet.save(function(err, sheet) {
    if (err)
      res.send(err);
    res.json(sheet);
  });
};

exports.getSheet = function(req, res) {
  Sheet.findById(req.params.sheetId, function(err, sheet) {
    if (err)
      res.send(err);
    res.json(sheet);
  });
};

exports.updateSheet = function(req, res) {
    Sheet.findOneAndUpdate({_id: req.params.sheetId}, req.body, {new: true}, function(err, sheet) {
    if (err)
      res.send(err);
    res.json(sheet);
  });
};

exports.deleteSheet = function(req, res) {
  Sheet.remove({
    _id: req.params.sheetId
  }, function(err, sheet) {
    if (err)
      res.send(err);
    res.json({ message: 'Sheet successfully deleted' });
  });
};

