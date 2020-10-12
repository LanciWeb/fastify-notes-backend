const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
  text: { type: String, required: true },
});

const Note = mongoose.model('note', noteSchema);

module.exports = Note;
