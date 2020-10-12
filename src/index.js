const fastify = require('fastify');
const app = fastify();
const mongoose = require('mongoose');
const noteRoutes = require('./routes/noteRoutes');
const contentRangeHook = require('./hooks/contentRangeHook');

try {
  mongoose.connect('mongodb://localhost:27017/notes_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (e) {
  console.error(e);
}

app.addHook('preHandler', contentRangeHook);
noteRoutes(app);

app.listen(5000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});
