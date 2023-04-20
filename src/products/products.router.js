const router = require('express').Router()
const productServices=require('./products.services');

router.route('/products')
.get(productServices.getAllProducts)
.post(productServices.createProducts);

router.route('/products/:id')
.get(productServices.getProductById)
.patch(productServices.updateProducts)
.delete(productServices.deleteProducts)

module.exports = router