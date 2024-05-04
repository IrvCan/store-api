const express = require('express');

const ProductsService = require('./../services/product.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();

  res.json(products);
})

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const product = products.findOne(id);

  res.json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = products.create(body);
  res.status(201).json({
    message: 'created',
    data: newProduct
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);

  res.json({
    message: 'update',
    data: product,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id)
  res.json(rta);
});

module.exports = router;