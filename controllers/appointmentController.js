var express = require('express');
var router = express.Router();


var appointment = require('../models/appointmint');
var customer = require('../models/customer');
var stylist = require('../models/stylist');
var artist = require('../models/artist');

router.get('/',appointment.getAll, renderIndex); // get all appointments
router.get('/new', artist.getAll,stylist.getAll,customer.getAll ,renderNew)//create new appointment
router.get('/:id', appointment.find, renderShow);// find appointment by id
router.get('/:id/edit', appointment.find, renderEdit);//edit appointment by id


router.post('/', appointment.create,redirectShow);
router.put('/:id', appointment.update, redirectShow );
router.delete('/:id', appointment.delete,redirectIndex);

function renderIndex(req,res){

    var mustacheVariables ={

        appointment: res.locals.appointment
    }
    
    res.render('./appointments/index', mustacheVariables);
}

function renderNew(req,res){
    var mustacheVariables ={
        artists: res.locals.artists,
        stylist: res.locals.stylist,
        customer: res.locals.customer,
        appointment : res.locals.appointment

    }
    res.render('./appointments/new',mustacheVariables)
}

function renderShow(req,res){
    var mustacheVariables = res.locals.appointment;
    res.render('./appointments/show', mustacheVariables);
}

function renderEdit(req,res){
    var mustacheVariables={
        appointment :res.locals.apppointment
    }
    res.render('./appointments/edit', mustacheVariables);
}

function redirectShow(req,res){
    res.redirect(`./appointments/${res.locals.appointmentId}`);
}

function redirectIndex(req,res){
    res.redirect('./appointment');
}





module.exports = router;