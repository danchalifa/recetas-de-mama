var express = require("express");
var router = express.Router();

router.get("/getRecipies", function(req, res, next) {
    res.send("API is working properly");
});

module.exports = router;
