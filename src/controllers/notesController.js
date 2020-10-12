const Note = require('../models/note');

module.exports = {
  //# create a note
  create: async (request, reply) => {
    try {
      const note = request.body;
      const newNote = await Note.create(note);
      reply.code(201).send(newNote);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#get the list of notes
  fetch: async (request, reply) => {},

  //#get a single note
  get: async (request, reply) => {},

  //#update a note
  update: async (request, reply) => {},

  //#delete a note
  delete: async (request, reply) => {},
};
