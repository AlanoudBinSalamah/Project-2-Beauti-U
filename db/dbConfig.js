var pgPromise = require('pg-promise');
var pgInstance = pgPromise();

var config={
    host : 'localhost',
    port: 5432,
    database:'beauti_u',
    user: 'postgres',
    password: 0000
}

var connection = pgInstance( process.env.DATABASE_URL ||config);
module.exports = connection;
