const { request } = require("chai");
const express = require("express");
const { response } = require("../8-api/api");

const app = express();
const port = 7865;

app.get("/", (request, response) => {
  response.send("Welcome to the payment system");
});

app.get("/cart/:id([0-9])", (request, response) => {
  response.send(`Payment method for cart ${request.params.id}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
