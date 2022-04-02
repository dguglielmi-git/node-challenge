var data = require('../data-store');
var projects = data.getProjects();
var router = require('express').Router();
const { searchProjOrderAsc, searchActive, searchById } = require('../util/util');

router.get('/', function (req, res, next) {
  next();
}, function (req, res) {
  return res.status(200).json(searchProjOrderAsc(projects));
});

router.get('/active', function (req, res, next) {
  next();
}, function (req, res) {
  const result = searchActive(projects);
  return res.status(200).json(result);
})

router.get('/:id', function (req, res, next) {
  next();
}, function (req, res) {
  const result = searchById(projects, req.params.id);
  return res.status(200).json(result[0]);
})

module.exports = router;
