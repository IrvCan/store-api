const express = require('express');
const routerApi = require('./Routes');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to server')
})

routerApi(app);

app.listen(port, () =>{
  console.log('listening on port' + port);
})
