const notesController = require('../controllers/notesController');

module.exports = (app) => {
  //# create a note
  app.post('/api/notes', notesController.create);

  //#get the list of notes
  app.get('/api/notes', notesController.fetch);

  //#get a single note
  app.get('/api/notes/:id', notesController.get);

  //#update a note
  app.put('/api/notes/:id', notesController.update);

  //#delete a note
  app.delete('/api/notes/:id', notesController.delete);
};
