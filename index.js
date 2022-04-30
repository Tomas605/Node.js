const express = require('express');
const cors = require("cors")

const app = express();
app.use(cors());

let count = 0;

app.listen(9000, () => {
    console.log('serveris paleistas!');
});

app.get('/counter', (request, response) => {
    count++;
    response.send(`Užklausų skaičius: ${count}`);
});