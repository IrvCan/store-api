const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to server')
})

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price(), 10),
      image: faker.image.url()
    })
  }

  res.json([products]);
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

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset) {
    res.json({
      limit: limit,
      offset: offset
    });
  } else {
    res.send('ERROR: Invalid params');
  }

});

app.listen(port, () =>{
  console.log('listening on port' + port);
})
