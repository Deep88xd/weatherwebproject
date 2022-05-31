//npm init
//npm i express
// nodemon .\app.js -e js,hbs which file you want to give live update feature just give extension to nodemon.

const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = 8000;
// const port = process.env.PORT || 3000;

// what is process.env.PORT || 3000 ?
// process.env.PORT checks default port is currently in use or not, if default port is in use then shift to the port 3000.

//public static path
const staticPath = path.join(__dirname, "../public");

const templatePath = path.join(__dirname, "/templates/views");
const partialsPath = path.join(__dirname, "/templates/partials");


// to view index.hbs (handlebar) on webpage
app.set("view engine", "hbs");

// to render partials and views folder on webpage .
// give path of views directory which file is to be render.such as templatePath
// register partials path directory with hbs, which file is to be render.such as partialsPath

app.set("views", templatePath);
hbs.registerPartials(partialsPath)

app.use(express.static(staticPath));


// app.get(route, callback);
//routing
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("Weather");
});

// Adding 404 Error page.
//we can pass an object also.
app.get("*", (req, res) => {
  res.render("404Error", {
    errormsg:"Oops! page not found. click here to homepage"
  });
});

app.listen(port, () => {
  console.log(`listening to the port at ${port}`);
});
