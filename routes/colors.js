var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Cor = require('../models/Color.js');

/* GET ALL */
router.get('/', function(req, res, next) {
   Cor.find(function (err, cor) {
        if (err) return next(err);
        res.json(cor);
    });
});

/* GET SINGLE BY ID */
router.get('/buscaid/:id', function(req, res, next) {
    Cor.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE  */
router.post('/', function(req, res, next) {
    Cor.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE  */
router.put('/:id', function(req, res, next) {
    Cor.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE  */
router.delete('/:id', function(req, res, next) {
    Cor.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        var retorno_delete = { 'status':'Cadastro excluído com sucesso!'}
        res.json(retorno_delete);
    });
});

module.exports = router;