// Create web server
var express = require('express');
var router = express.Router();

// Create route for GET request to /comments
router.get('/', function(req, res, next) {
    // Create array of comments
    var commentsArray = [
        "First comment",
        "Second comment",
        "Third comment"
    ];
    // Send array of comments
    res.send(commentsArray);
}