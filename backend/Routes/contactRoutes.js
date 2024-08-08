const express = require('express');
const router = express.Router();
const {getContacts , getContact ,createContact, updateContact , deleteContact} = require('../controllers/contactControllers');
const validationToken = require('../middleware/validationHandler');


router.use(validationToken);

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
