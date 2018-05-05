var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const sequelize = require("../models/index");

router.get('/credits', function(req, res, next) {
    res.render('credits', { title:'Quiz', name: 'Carlos García Manrique' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'P5_Quiz' });
});



router.get('/quizzes', function(req, res, next) {
    sequelize.models.quiz.findAll().
    then( quizzes => {
        res.render('quizzes', {quizzes});
    })
    .catch(Sequelize.ValidationError, error => {
    })
    .catch(error => {
    });
});

module.exports = router;
