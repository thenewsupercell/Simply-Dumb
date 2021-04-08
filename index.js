const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Hey Dumbo'));
app.listen(port, () => console.log('Hola'));

const Client = require('./Client/Client.js');
new Client().start('./commands', './events')