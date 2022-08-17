const user = require('./controllers/user');
const router = require('express').Router();

router.get('/users/:name',user)

module.exports = router;