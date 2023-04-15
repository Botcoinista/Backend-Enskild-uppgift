const express = require("express"); //Hämtar hem express
const app = express(); //Gör om express till variabeln app
const cors = require("cors")



app.use(cors());
app.use(express.json()); //Konverterar om json till ett javascriptobjekt
app.use(express.urlencoded({ extended: false })); //Konverterar om json till ett javascriptobjekt, men ser också till att separera de olika key, valupairs man hämtar hem

//Controllers
app.use( "/api/product", require("./controller/productController")
);

module.exports = app; //Exporterar app så att man kan hämta in app i tex server.js filen
