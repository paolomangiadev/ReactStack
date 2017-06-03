export default function(app) {
  app.use('/api/quotes', require('./api/quotes'));
  app.use('/api/services', require('./api/services'));
};
