

var db = require('../db/dbConfig');


var artist={};

artist.getAll = function(req,res,next){
    db.manyOrNone("SELECT * FROM artist_stylist;")
    .then(function(result){
        res.locals.artists = result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}
artist.find= function(req,res,next){
    db.one("SELECT * FROM artist_stylist WHERE id=$1 ",[req.params.id])
    .then(function(result){
        res.locals.artist = result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}









module.exports = artist;
