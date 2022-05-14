const express = require('express');
const app = express();



const knygos = [
'Haris Poteris',
'Biblija',
'1984',
]

app.listen(9000, () => {
    console.log(`Serveris paleistas. Laukia užklausų`);
});

app.get('/books/:from/:to', (request, response) => {
   const fromIndex = request.params.from;
const toIndex = request.params.to;

const atgnybtasMasyvas = knygos.slice(fromIndex,toIndex);
   
response.json(atgnybtasMasyvas);
  

});
