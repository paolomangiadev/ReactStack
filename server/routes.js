export default function(app) {
  app.use('/api/chats', require('./api/chats'));
  app.use('/api/services', require('./api/services'));
};
