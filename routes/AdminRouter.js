var express = require("express")
var router = express.Router();
const AdminController = require('../controllers/AdminController');
const middleware = require('../middleware/auth')

router.get('/missions', middleware.admin, AdminController.index);

router.post('/validar', middleware.admin, AdminController.validar);

router.get('/persons', middleware.admin, AdminController.person);

router.get('/addperson', middleware.admin, AdminController.addperson);

router.post('/adddino', middleware.admin, AdminController.adddino);


module.exports = router;