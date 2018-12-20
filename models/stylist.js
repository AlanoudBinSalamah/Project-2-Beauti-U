

var db = require('../db/dbConfig');


var stylist = {};

stylist.getAll = function(req,res,next){
    db.manyOrNone("SELECT * FROM artist_stylist; ")
    .then(function(result){
        res.locals.stylist= result;
        next();
    })
    .catch(function(error){
        console.log(error);
    
    })
}

stylist.find = function(req,res,next){
    db.one("SELECT * FROM artist_stylist WHERE id=$1",[req.params.id])
    .then(function(result){
        res.locals.stylist = result;
        next();
    })
    .catch(function(error){
        console.log(error);
    })
   
}

module.exports=stylist;