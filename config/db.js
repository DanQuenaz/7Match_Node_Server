const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: '7match_server_db',
    multipleStatements: true
});
module.exports = db