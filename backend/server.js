const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
  
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://kf7fy92:E6KmVMWvvPxBvv0M@gamestate.qtkgobg.mongodb.net/?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}) .then(() => console.log("Connected to Mongo"))
   .catch(console.error);

const Model = require("./Model.js");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error connecting..."));
db.once("open", () => {
    console.log("Connected successfully");
});

app.post('/initialize', (req, res) => {
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            db.GameState.insertOne(
                {
                    row: i,
                    column: j,
                    alive: false
                }
            )
        }
    }
    res.json(null);
})

app.get('/boardstate', async (req, res) => {
    const boardstate = await Model.find();
    res.json(boardstate);
  })
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);