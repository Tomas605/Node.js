const express = require('express');
const app = express();

let count = 0;

app.listen(9000, () => {
    console.log('serveris paleistas!');
});

app.get('/counter', (request, response) => {
    count++;
    response.send(`Užklausų skaičius: ${count}`);
});