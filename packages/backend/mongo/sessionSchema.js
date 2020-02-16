const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  teamName: String,
  roomName: String
});

Session = mongoose.models['tests'] || mongoose.model('tests', sessionSchema);
module.exports = Session;
