var express = require("express");
var router = express.Router();
const sql = require('sqlite3').verbose();

// Get Everything
router.get("/recipes", function(req, res, next) {

    let response = []

    const sqlite3 = require('sqlite3').verbose();

    // open the database
    let db = new sqlite3.Database('../db/RecipesDB_v4.db');

    let sql = `SELECT * FROM RECIPES_FULL;`;

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

// Get Categories in Spanish
router.get("/types", function(req, res, next) {

    let response = []

    const sqlite3 = require('sqlite3').verbose();

    // open the database
    let db = new sqlite3.Database('../db/RecipesDB_v4.db');

    let sql = `select distinct type from CATEGORY_DIM
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

// Recipes within the Categories
router.get("/recipesForCategory/", function(req, res, next) {

    let response = []

    const sqlite3 = require('sqlite3').verbose();

    // open the database
    let db = new sqlite3.Database('../db/RecipesDB_v4.db');

    let sql = "SELECT Name, ingredientes, direcciones FROM RECIPES_FULL where Type like ";
    sql +=  "'" + req.query.category + "'"

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




module.exports = router;
