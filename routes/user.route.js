const router = require('express').Router();

const userMiddleware = require('../middleware/user.middleware.js');

const user = require('../controllers/customer/user.conroller')
const admin = require('../controllers/admin/admin.conroller')
const farmer = require('../controllers/farmer/former.conroller')


// Manage User Api
router.post('/', user.login)
router.post('/signup', userMiddleware.validateRegister, user.signup);
router.get('/auth',  userMiddleware.isLoggedIn, user.auth);

// Manage admin Api
router.post('/admin', admin.login)
router.post('/admin/signup', userMiddleware.validateRegister, admin.signup);
router.get('/admin/auth',  userMiddleware.isLoggedIn, admin.auth);

// Manage farmer Api
router.post('/farmer', farmer.login)
router.post('/farmer/signup', userMiddleware.validateRegister, farmer.signup);
router.get('/farmer/auth',  userMiddleware.isLoggedIn, farmer.auth);

module.exports = router