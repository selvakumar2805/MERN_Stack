const express = require("express");

const mongoose = require('mongoose');


//setting up Express js
const app = express();

const PORT = 8080;


//Connection String
const CONNECT_STR = "mongodb://localhost:27017/Mern"
//app.method(path, handler);
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

// Importing Router
const dashboardRoutes = require("./routers/dashboardRoutes");

// app.method(path, handler);


// Defining API 

app.use("/dashboard",dashboardRoutes);


app.listen(PORT, () => {
    console.log(`Dashboard -> Listening to ${PORT}`);
});

mongoose.connect(CONNECT_STR)
.then(() => {
    console.log("Hurray! Connected Successfully!");
})
.catch((error) => {
    console.log(error)
});