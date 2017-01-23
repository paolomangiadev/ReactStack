var config = {};

config.serverPort = process.env.WEB_PORT || 3000;

config.mongo = {
  uri: 'mongodb://localhost/reactstack',
  options: {
    db: {
      safe: true
    }
  }
}
export default config;
