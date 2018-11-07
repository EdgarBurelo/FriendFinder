const express = require("express");
const path = require("path");
const fs = require("fs");


const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const htmlroutes = require("./app/routing/htmlRoutes.js");
const apiroutes = require("./app/routing/apiRoutes.js");

htmlroutes(app);
apiroutes(app);

require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});