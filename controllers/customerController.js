var express = require('express');
var router = express.Router();

var customer = require('../models/customer');

router.get('/',customer.getAll, renderIndex);
router.get('/new', customer.getAll, renderNew);
router.get('/:id',customer.find, renderShow);
router.get('/:id/edit', customer.find, renderEdit);

router.post('/', customer.create,redirectShow);
router.put('/:id',customer.update, redirectShow);
router.delete('/:id', customer.delete, redirectIndex);



function renderIndex (req,res){
var mustacheVariables ={
    customer : res.locals.customer
}
res.render('./customers/index',mustacheVariables);
}

function renderNew (req,res){
    var mustacheVariables={
        customer:res.locals.customer
    }
    res.render('./customers/new', mustacheVariables);
}

function renderShow(req,res){
    var mustacheVariables={
        customer: res.locals.customer
    }

    res.render('./customers/show',mustacheVariables);
}
function renderEdit (req,res){

var mustacheVariables={
    customer:res.locals.customer
}
res.render('./customers/edit', mustacheVariables);
}

function redirectShow(req,res){
    var mustacheVariables={
        customers:res.locals.customers
    }
    res.redirect(`./customers/${res.locals.customerId}`)
}

function redirectIndex(req,res){
    res.rediect('./customers')
}



module.exports = router;



