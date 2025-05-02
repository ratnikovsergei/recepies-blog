const express = require('express');

const router = express.Router({ mergeParams: true });

router.use('/', require('./auth'));
router.use('/users', require('./user'));
router.use('/posts', require('./post'));
router.use('/recipes', require('./recipe'));

module.exports = router;
