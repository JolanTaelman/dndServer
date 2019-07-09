'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SheetSchema = new Schema({
  playerName: {
    type: String,
    required: true,
  },
  characterName: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
  race: {
    type: String,
    required: true,
  },
  alignment: {
    type: String,
    required: true,
  },
  classname: {
    type: String,
    required: true,
  },
  hitDie: {
    type: Number,
    required: true,
  },
  classLevels: {
    type: Number,
    required: true,
  },
  strength: {
    type: Number,
    required: true,
  },
  dexterity: {
    type: Number,
    required: true,
  },
  constitution: {
    type: Number,
    required: true,
  },
  intelligence: {
    type: Number,
    required: true,
  },
  wisdom: {
    type: Number,
    required: true,
  },
  charisma: {
    type: Number,
    required: true,
  },
  armorClass: {
    type: Number,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  healthPoints: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Sheets', SheetSchema);