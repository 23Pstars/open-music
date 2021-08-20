const MusicsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'musics',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const notesHandler = new MusicsHandler(service, validator);
    server.route(routes(notesHandler));
  },
};
