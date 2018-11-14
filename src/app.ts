import * as express from 'express';

const app = express();
app.use(require('express-status-monitor')());

/**
 * Start Express server.
 */
const server = app.listen(4000, () => {
  console.log('App is running at http://localhost:4000 in dev mode');
  console.log('Press CTRL-C to stop\n');
});

export = server;
