const express = require("express");
const app = express();
const cors = require("cors");
//middleware
app.use(express.json());
app.use(cors());
// app.use((req, res, next) => {
//     //injecting a fucntion into our application that runs at 
//     console.log(`Trigger 1`);
//     //res.send(`intercepted by middleware`);
//     next();
// });
///
require("dotenv").config();

const questionController = require("./controllers/questionController.js");

app.get("/", (req, res) => {
    res.send("Welcome to our flyer app back-end");
});

app.use("/questions", questionController);

//404 Page
app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
});

module.exports = app;