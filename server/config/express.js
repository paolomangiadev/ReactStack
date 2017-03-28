import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

const distPath = '../../dist/client/public';

export default function(app) {

  // configure app to use bodyParser()
  // this will let us get the data from a POST
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use('/', express.static(path.join(__dirname, distPath)));
};
