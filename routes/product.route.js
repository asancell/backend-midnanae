const router = require('express').Router();

const typeproduct = require('../controllers/type-product.controller')


// Manage User Api
router.get('/', typeproduct.read)
router.post("/create-typeproduct",typeproduct.create)
router.patch('/update-typeproduct/:type_product_id', typeproduct.update);
router.delete('/delete-typeproduct/:type_product_id', typeproduct.delete)

module.exports = router