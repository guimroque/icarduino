var express = require("express")
var router = express.Router();
var UserController = require('../controllers/UserController');
const middleware = require('../middleware/auth')

router.get('/index',middleware.login, UserController.index);

router.get('/env',middleware.login, UserController.env);

router.post('/store', middleware.login, UserController.store);




module.exports = router;