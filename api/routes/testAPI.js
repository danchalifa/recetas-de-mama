var express = require("express");
var router = express.Router();
const sql = require('sqlite3').verbose();


router.get("/", function(req, res, next) {


    let response = []
    let db = new sql.Database('../db/RecipesDB.db', sql.OPEN_READONLY, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Connected to the recipes database.');


        db.serialize(function () {
            db.each("select name, type, text from recipes_list_english where rowid = 10", function (err, table) {
                console.log(table);
                response.push(table)
            });
        });

        db.close((err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Close the database connection.');
        });


    });
    console.log("final response")
    console.log(response)
    res.send(response);
});

module.exports = router;
