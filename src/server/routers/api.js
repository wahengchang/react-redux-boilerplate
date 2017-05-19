var express = require('express')
var router = express.Router()


router.get('/api/hello2', function (req, res) {
  res.send('Hello World!')
})

module.exports = router
