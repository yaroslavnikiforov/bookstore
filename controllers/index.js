"use strict";

var Book = require("../models/Book");

module.exports = function(router) {
    router.get("/", function(req, res) {
        Book.find({}, function(err, books) {
            if (err) {
                console.error(err);
            }

            books.forEach(function(book) {
                book.truncText = book.truncText(50);
            });

            var model = {
                books
            };

            res.render("index", model);
        });
    });
};
