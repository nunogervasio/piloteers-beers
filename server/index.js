const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const fetch = require("node-fetch");
const APIKEY = require("../src/config");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get("/api/greeting", (req, res) => {
  fetch(`https://sandbox-api.brewerydb.com/v2/beers/?key=${APIKEY}`)
    .then(res => res.json())
    .then(json => res.send(json));
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
