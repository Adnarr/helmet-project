const helmet = require('helmet');
const express = require('express');
const api = require('./server.js');

const app = express();

// Configuración Helmet para cumplir con los desafíos
app.use(helmet()); // ← Este es el primer desafío de freeCodeCamp

app.use(express.static('public'));
app.use('/_api', api);

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});

module.exports = app;