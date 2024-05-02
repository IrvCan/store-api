const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to server')
})

app.get('/products', (req, res) => {
  res.json([
    {
      id: 1,
      name:'Producto 1',
      price: 150
    },
    {
      id: 2,
      name:'Producto 2',
      price: 100
    }
  ])
})

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  res.json({
    id,
    name:'Producto 2',
    price: 100
  })
});

app.get('category/:categoryId/products/:productid', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  });
});

app.listen(port, () =>{
  console.log('listening on port' + port);
})
