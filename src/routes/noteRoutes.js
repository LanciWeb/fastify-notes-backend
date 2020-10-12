module.exports = (app) => {
  //# create a note
  app.post('/api/notes', (request, reply) => {});

  //#get the list of notes
  app.get('/api/notes', (request, reply) => {});

  //#get a single note
  app.get('/api/notes/:id', (request, reply) => {});

  //#update a note
  app.put('/api/notes/:id', (request, reply) => {});

  //#delete a note
  app.delete('/api/notes/:id', (request, reply) => {});
};
