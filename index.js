const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const app = express();
const portNumber = 4000;
require("dotenv").config({ path: path.resolve(__dirname, '.env') })

app.use(bodyParser.urlencoded({extended:false}));

const uri = process.env.MONGO_CONNECTION_STRING;

const databaseAndCollection = {db: "R&BLOG_DB", collection:"commentCollection"};
const { MongoClient, ServerApiVersion } = require('mongodb');

const client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'templates'));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.render("homepage");
});

app.get("/tory-lanez", (req, res) => {
    res.render("article-1");
});

app.get("/brent-faiyaz", (req,res) => {
    res.render("article-2");
});

app.get("/weeknd", (req,res) => {
    res.render("article-3");
});

app.get("/drake", (req,res) => {
    res.render("article-4");
});

app.get("/about", (req,res) => {
    res.render("about");
})


app.listen(portNumber)

process.stdout.write(`Web server started and running at http://localhost:${portNumber}\n`);

const prompt = "Stop to shutdown the server: ";
process.stdout.write(prompt);

process.stdin.on("readable", function () {
    const input = process.stdin.read();
    if (input !== null) {
        const command = input.toString().trim();
        if (command === "stop") {
            process.stdout.write("Shutting down the server\n");
            process.exit(0);
        } else {
            process.stdout.write(`Invalid command: ${command}\n`);
        }
        process.stdout.write(prompt);
        process.stdin.resume();
    }
});