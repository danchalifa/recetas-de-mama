var express = require("express");
var router = express.Router();
const sql = require('sqlite3').verbose();


router.get("/recipes", function(req, res, next) {

    let response = []

    const sqlite3 = require('sqlite3').verbose();

    // open the database
    let db = new sqlite3.Database('../db/RecipesDB.db');

    let sql = `SELECT * FROM RECIPES_LIST_ENGLISH;`;

    db.all(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
            response.push(row)
        });
        res.send(response);
    });

    // close the database connection
    db.close();  

});


router.get("/types", function(req, res, next) {

    let response = []

    const sqlite3 = require('sqlite3').verbose();

    // open the database
    let db = new sqlite3.Database('../db/RecipesDB.db');

    let sql = `select DISTINCT type from RECIPES_LIST_ENGLISH
`;

    db.all(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
            response.push(row.Type)
        });
        res.send(response);
    });

    // close the database connection
    db.close();  

});



module.exports = router;
