const express = require('express');
const app = express();


//knygos[0] pasiekiam masyvo verte
const knygos = [
'Haris Poteris',
'Biblija',
'1984',
]

app.listen(9000, () => {
    console.log(`Serveris paleistas. Laukia užklausų`);
});

app.get('/books/:id', (request, response) => {
    const knygosPavadinimas = request.params.id
   response.json(knygos[request.params.id]);
});