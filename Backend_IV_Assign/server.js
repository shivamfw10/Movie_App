const express = require('express');
const users = require("./data.json");
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to Home Page");
});

app.get("/users",(req,res)=>{
    res.send(users);
});

app.listen(4545,()=>{
    console.log("Listening on Port 4545");
})