const express = require("express");

const app = express();

const {register,login} = require("./controllers/auth.controller");
const userController =require("./controllers/user.controller");
const postController = require("./controllers/post.controller");
const registerController = require("./controllers/register.controller");

app.use(express.json());

// app.use("/users",userController);
// app.use("/posts",postController);
// app.use("/register",registerController);
// app.post("/login",login);


module.exports= app;