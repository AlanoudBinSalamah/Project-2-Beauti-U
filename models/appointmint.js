
var db = require('../db/dbConfig');

var appointment = {};

appointment.getAll = function (req, res, next) {
    console.log("appoitments" )

    db.manyOrNone("SELECT * FROM appointments JOIN customers ON customers.first_name=$1 , customers.middle_name=$2 , customers.last_name=$3,customers.phoneNumber=$4,cutomers.email=$5,appointments.appointmentDte=$6 WHERE customers.id=$7 ;"
[req.body.first_name,req.body.middle_name, req.body.last_name, req.body.phoneNumber, req.body.email])
        .then(function (result) {

            console.log("appoitments", result )
            res.locals.appointments = result;
            next();
        })
        .catch(function (error) {
            console.log(error);
            next();
        })
}

appointment.find = function (req, res, next) {
    db.one("SELECT * FROM appointments WHERE id=$1", [req.params.id])
        .then(function (result) {
            res.locals.appoin = result;
            next();
        })

        .catch(function (error) {
            console.log(error);
            next();
        })
}

appointment.create = function (req, res, next) {
    console.log(req.body);
    db.one("INSERT INTO appontments(customer_id,artist_id,appointmentDte)VALUES(1$,2$,3$)RETURNIN id;",
        [req.body.customer_id, req.body.artist_id, req.body.appointmentDte])
        .then(function (result) {
            res.locals.appontmentId = result.id;
            next();
        })
        .catch(function (error) {
            console.log(error);
            next();
        })

}

appointment.update = function (req, res, next) {
    db.one("UPDATE appointments SET customer_id=$1, typeOfArtist_id=$2, appointmentDte=$3 ",
        [req.body.customer_id, req.body.typeOfArtist_id, req.body.appointmentDte])
        .then(function (result) {
            res.locals.appontmentId = result.id;
            next();
})
.catch(function(error){
    console.log(error);
    next();
})
}

appointment.delete= function(req,res,next){
    db.one("DELETE FROM appointments WHERE id=$1;",
    [req.params.id])
    .then(function(){
     next();
    })

    .catch(function(error){
        console.log(error);
        next();
    })
}



module.exports=appointment;




