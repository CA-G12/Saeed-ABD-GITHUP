const user = require('./controllers/user');
const router = require('express').Router();

router.get('/users/:name',user.user)
router.get('/users/:name/repos',user.repos)

module.exports = router;