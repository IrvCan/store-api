const express = require('express');
const cors = require('cors');
const routerApi = require('./Routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const { C } = require('@angular/cdk/keycodes');

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'http://myapp.com']
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)){
      callback(null, true);
    } else {
      callback(new Error('Not allowed'));
    }
  }
};

app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Welcome to server')
})

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () =>{
  console.log('listening on port' + port);
})
