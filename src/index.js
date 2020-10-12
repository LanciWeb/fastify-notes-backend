const fastify = require('fastify');
const app = fastify();

app.get('/', (request, reply) => {
  reply.send('Ok, funziona tutto!');
});

app.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});
