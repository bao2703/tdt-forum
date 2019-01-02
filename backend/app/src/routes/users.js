const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json('respond with a resource');
});

module.exports = router;
