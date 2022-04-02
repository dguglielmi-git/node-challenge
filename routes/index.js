var express = require('express');
var router = express.Router();
const { searchAllProjects, searchById, searchActive } = require('../util/util')

/* GET home page. */
router.get('/', function (req, res) {
  return res.status(200).send({ "text": "test" });
});



module.exports = router;
