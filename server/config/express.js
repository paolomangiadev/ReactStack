import bodyParser from 'body-parser';
import path from 'path';

const clientPath = '../../client/public';

export default function(app) {
  // configure app to use bodyParser()
  // this will let us get the data from a POST
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, `${clientPath}` , 'index.html'));
  });
};
