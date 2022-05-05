const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

let count = 0;

app.listen(9000, () => {
    console.log(`Serveris paleistas. Užklausų skaičius: ${count}`);
});

app.get('/', (request, response) => {
    count++;
    console.log(`Užklausų skaičius: ${count}`);
    response.json(count);
});