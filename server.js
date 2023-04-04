const app = require("./app");   //Importerar in koden man skrivit i app.js

const mongoose = require("mongoose");   //Hämtar hem mongoose
require("dotenv").config();  /*laddar in det jag skrivit i .env filen och gör så att jag kan använda dem med process.env. Så när jag 
vill hämta hem tex PORT så skriver jag process.env.PORT*/

const PORT = process.env.PORT || 9999;  //skapar en variabel (PORT) som vi kan återanvända. Får tillgång till det som ligger i .env filen
const serverURI = "http://localhost:" + PORT


app.listen(PORT, () => console.log("Server is running on " + serverURI))     //Startar servern och lyssnar efter inkommande förfrågningar
mongoose.connect(process.env.MONGO_URI)     // ansluter till den specifika databasen genom att ta in adressen som ligger i .env-filen
.then(() => console.log("Connected to Db"))     //Efter att ha anslutit till databasen så skriver vi ut att det lyckats i konsollen
.catch(error => (console.log(error)))   //Fångar upp eventuella fel och visar det i konsolloen