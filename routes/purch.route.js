const router = require('express').Router();

const purch = require('../controllers/admin/purch.controller')
 const payment = require('../controllers/admin/pm-purch.controller')
 const dtpurch = require('../controllers/admin/dt-purch.controller')


// Manage purch product Api
router.get('/', purch.read)
router.post("/create-purch",purch.create)
router.patch('/update-purch/:order_product_id',purch.update);
router.delete('/delete-purch/:order_product_id',purch.delete);

// Manage  product Api
router.get('/payment', payment.read);
router.post("/create-pmpurch",payment.create)


// // Manage weasted product Api
 router.get('/dtpurch', dtpurch.read);
 router.post("/create-dtpurch",dtpurch.create)
// router.patch('/update-wstproduct/:wst_product_id', wstproduct.update);
// router.delete('/delete-wstproduct/:wst_product_id', wstproduct.delete);

module.exports = router