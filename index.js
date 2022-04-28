const express = require("express"); // sukuriam kintamaji express

const app = express();


app.listen(9000, () => {
    console.log("Labas,serveris veikia");

});

app.get("/", (request, response) => {
console.log("ivyko uzklausa");
response.send("Hello word");
});



