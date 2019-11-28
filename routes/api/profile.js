const express = require('express');
const router = express.Router();

//@route    Get api/profile
//@desc     Profile route
//@acess    Public
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;