const express = require('express');
const router = express.Router();

//@route    Get api/users
//@desc     Auth route
//@acess    Public
router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;