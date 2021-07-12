const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', `${process.env.ACCESS_CONTROL_ALLOW_ORIGIN}`);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
  next()
})

router.get('/', (req, res) => {
  res.send("This is the /api root handler")
});

router.get('/address', async (req, res) => {
  res.send("Address get route hit!!")
})
module.exports = router;