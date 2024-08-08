const express = require('express');

const router = express.Router();

const {registerUser , loginUser , currUser} = require('../controllers/userControllers');
const validationToken = require('../middleware/validationHandler');

router.route('/register').post(registerUser);
//router.post('/register' , registerUser);
router.route('/login').post(loginUser);
router.get('/current',validationToken,currUser);

module.exports = router;