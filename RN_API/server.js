const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const teams = require('./routes/teams');

server.use(middlewares);

server.use('/api', teams);

server.listen(9025, () => {
  console.log('JSON Server is running');
});
