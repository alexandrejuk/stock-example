const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const Sequelize = require('sequelize');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(() => console.log('api stock running...'));

const sequelize = new Sequelize('postgres://root:localhost/test');
