const express = require('express');

const router = express.Router();

const {registerUser , loginUser , currUser} = require('../controllers/userControllers');

router.route('/register').post(registerUser);
//router.post('/register' , registerUser);
router.route('/login').post(loginUser);
router.route('/current').get(currUser);

module.exports = router;