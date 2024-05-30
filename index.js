const express = require("express");
const path = require('path');
const app = express();
const portNumber = 5000;

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'templates'));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.render("homepage")
});

app.listen(portNumber, () => {
    console.log(`Server is running on port ${portNumber}`);
});