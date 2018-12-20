var express = require('express');
var router = express.Router();

var stylist = require('../models/stylist');

router.get('/', stylist.getAll , renderIndex);
router.get('/:id', stylist.find, renderShow);

function renderIndex(req,res){

    var mustacheVariables ={
        stylist: res.locals.stylist
    }
    res.render('./stylists/index', mustacheVariables);
}

function renderShow(req,res){
    var mustacheVariables ={
      stylists: res.locals.stylists
    } 
    res.render('./stylists/show', mustacheVariables);
}

module.exports = router;