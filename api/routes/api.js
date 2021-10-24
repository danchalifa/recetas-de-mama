var express = require("express");
var router = express.Router();
const sql = require('sqlite3').verbose();


// Get Everything
router.get("/recipes", function(req, res, next) {

    let response = []

    const sqlite3 = require('sqlite3').verbose();

    // open the database
    let db = new sqlite3.Database('./db/RecipesDB_v5.db');

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
    let db = new sqlite3.Database('./db/RecipesDB_v5.db');

    let sql = `select * from CATEGORY_DIM
`;

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

// Recipes within the Categories
router.get("/recipesForCategory/", function(req, res, next) {

    let response = []

    const sqlite3 = require('sqlite3').verbose();

    // open the database
    let db = new sqlite3.Database('./db/RecipesDB_v5.db');

    let sql =
      "SELECT Name, Name_English, ingredientes, direcciones, Ingredients_English, Directions_English, prep_time, cook_time, catid FROM RECIPES_FULL where catid =";
      console.log(req.query)
    sql += req.query.category

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


// Recipes within the Categories
router.get("/dynamicsearch/", function(req, res, next) {
  let searchTerm = req.query.searchTerm;
  let url = "http://elasticsearch:9200/_search?pretty";
  console.log(searchTerm);
  let body = {
    query: {
      multi_match: {
        query: searchTerm,
        fields: ["Name", "Name_English"],
      },
    },
  };


 const request = require("request");

 request.post(
   {
     url: url,
     body: body,
     json: true,
   },
   function (error, response, body) {
     console.log(body);
     if (body != null) {
       let recipes = body.hits.hits;
       res.send(recipes);
     }
   }
 );

});




module.exports = router;
