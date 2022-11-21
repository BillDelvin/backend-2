const express = require("express");
const app = express();

const todosApi = require("./todos");

const api = "/api/v1"; // kenapa harus ada ini ?

app.use(api, todosApi);

module.exports = app;
