const express = require('express');
const cors = require('cors');
const routes = require('./routes');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    //this.server.use(cors());
    this.server.use(express.json());
    /*this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );*/
  }

  routes() {
    this.server.use(routes);
    //this.server.use(Sentry.Handlers.errorHandler());
  }

  /*
  exceptionHandler() {
    // eslint-disable-next-line no-unused-vars
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
  */
 
}

module.exports = new App().server;