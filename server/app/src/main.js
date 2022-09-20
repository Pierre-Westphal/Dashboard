/*
** EPITECH PROJECT, 2021
** Dashboard
** File description:
** main.js
*/

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./router.js').router(app);
app.listen(port, function () {
  console.log('app listening at port: %s', port);
});
