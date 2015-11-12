'use strict';

const http = require('http');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const errorHandler = require('errorhandler');
const chokidarSocketEmitter = require('chokidar-socket-emitter');

var app = express();
app.use(logger('dev'));
app.use(cors());
app.use(express.static('.'));
app.use(errorHandler());

let httpServer = http.createServer(app);
chokidarSocketEmitter({
  app: httpServer,
  path: ['one', 'two']
});
let p = process.env.PORT || 3000;
httpServer.listen(p, function() {
  console.log('Express server listening on port', p);
});
