

var db = require('../db/dbConfig');

var customer = {};

customer.find=function(req,res,next){
    db.one("SELECT * FROM customers WHERE id=$1;",[req.params.id])
    .then(function(result){
        res.locals.customer = result;
        next();
    })
    .catch(function(error){
     console.log(error);
     next();
    })
}

customer.getAll=function(req,res,next){
    db.one("SELECT * FROM customers WHERE id=$1;",[req.params.id])
    .then(function(result){
        res.locals.customer = result;
        next();
    })
    .catch(function(error){
     console.log(error);
     next();
    })
}

customer.create =function(req,res,next){
    console.log(req.body);
    db.one("INSERT INTO customers (first_name, middle_name, last_name, phoneNumber, email) VALUES($1,$2,$3,$4,$5) RETURNING id;",
    [req.body.first_name, req.body.middle_name, req.body.last_name, req.body.phoneNumber, req.body.email])
    .then(function(result){
    res.locals.customer= result.id;
    
    next();
    })
    .catch(function (error) {
        console.log(error);
        next();
    })
}

customer.update =function(req,res,next){
    console.log(req.body);
    db.one("UPDATE customers SET (first_name, middle_name, last_name, phoneNumber, email) VALUES($1,$2,$3,$4,$5) RETURNING id;",
    [req.body.first_name, req.body.middle_name, req.body.last_name, req.body.phoneNumber, req.body.email])
    .then(function(result){
    res.locals.customer= result.id;
    
    next();
    })
    .catch(function (error) {
        console.log(error);
        next();
    })
}

customer.delete= function(req,res,next){
    db.one("DELETE FROM customers WHERE id=$1;",
    [req.params.id])
    .then(function(){
     next();
    })

    .catch(function(error){
        console.log(error);
        next();
    })
}
 
module.exports = customer;