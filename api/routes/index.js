const express = require('express')
const router = express.Router()

/* GET test page. */
router.get('/', (req, res) => {
  res.status(200).json({
    test: true
  })
})

module.exports = router
