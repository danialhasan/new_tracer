const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("This is the root handler.")
});

router.get('/address', async (req, res) => {
  res.send("Address get route hit!")
})
module.exports = router;