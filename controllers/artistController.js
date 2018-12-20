var express = require('express');
var router = express.Router();

var artist = require('../models/artist');

router.get('/',artist.getAll, renderIndex);
router.get('/:id', artist.find, renderShow);

function renderIndex(req,res){

    var mustacheVariables ={
        artists: res.locals.artists
    }
    res.render('./artists/index', mustacheVariables);
}

function renderShow(req,res){
    var mustacheVariables ={
        artist : res.locals.artist
    }
    res.render('/artists/show', mustacheVariables);
}

module.exports = router;