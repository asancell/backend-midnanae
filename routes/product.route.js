const router = require('express').Router();

const typeproduct = require('../controllers/admin/type-product.controller')
const product = require('../controllers/admin/product.controller')
const wstproduct = require('../controllers/admin/wst-product.controller')


// Manage type product Api
router.get('/type', typeproduct.read)
router.post("/create-typeproduct",typeproduct.create)
router.patch('/update-typeproduct/:type_product_id', typeproduct.update);
router.delete('/delete-typeproduct/:type_product_id', typeproduct.delete);

// Manage  product Api
router.get('/', product.read);
router.post("/create-product",product.create)
router.patch('/update-product/:product_id', product.update);
router.delete('/delete-product/:product_id', product.delete);

// Manage weasted product Api
router.get('/wst', wstproduct.read);
router.post("/create-wstproduct",wstproduct.create)
router.patch('/update-wstproduct/:wst_product_id', wstproduct.update);
router.delete('/delete-wstproduct/:wst_product_id', wstproduct.delete);

module.exports = router