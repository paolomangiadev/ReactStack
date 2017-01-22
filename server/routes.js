export default function(app) {
  app.use('/api/chats', require('./api/chats'));
};
