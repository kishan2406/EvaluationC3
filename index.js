const express = require("express");

 const userController = require("./controllers/user.controller");
 const bookController = require("./controllers/book.controller");
 const publicatonController = require("./controllers/publication.controller");
 const commentController = require("./controllers/comment.controller")




const app = express();

app.use(express.json());



module.exports = app;
