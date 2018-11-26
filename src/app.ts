import * as bodyParser from 'body-parser';

import 'reflect-metadata';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';

// declare metadata by @controller annotation
import './api/controllers';

// set up container
const container = new Container();

// create server
const server = new InversifyExpressServer(container);
server.setConfig((app) => {
  // add body parser
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(bodyParser.json());
  app.use(require('express-status-monitor')());
});

const app = server.build();
app.listen(3000);
