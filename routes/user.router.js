const router = require('express').Router();

const userMiddleware = require('../middleware/user.middleware.js');

const user = require('../controllers/user.conroller')


// Manage User Api
router.post('/', user.login)
router.post('/signup', userMiddleware.validateRegister, user.signup);
router.get('/auth',  userMiddleware.isLoggedIn, user.auth);

module.exports = router