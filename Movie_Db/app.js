const express = require("express");
const mongoose = require("mongoose");

//create coonection
const connect=()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/assignment");
}
const app = express();
app.use(express.json());
//create schema
const userSchema = new mongoose.Schema({
    id:{type:Number,require:true},
    movie_name:{type:String,require:true},
    movie_genre:{type:String,require:true},
    production_year:{type:Number,require:false},
    budget:{type:Number,require:true}
})

//connect schema to the user collection
const Movie = mongoose.model("movie",userSchema);
//-----------CRUD----------------//
//post create product
app.post("/movies",async(req,res)=>{
    const movie = await Movie.create(req.body);//insert product
    return res.status(201).send({movie});
})
//get all movies
app.get("/movies",async(req,res)=>{
    const movies = await Movie.find();
    return res.status(200).send({movies});
})
//get a single movie
app.get("/movies/:id",async(req,res)=>{
    const movie = await Movie.findById(req.params.id).lean().exec();
    return res.status(200).send({movie});
})
//patch : Update a user
app.patch("/movies/:id",async(req,res)=>{
    const movie = await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true})
    return res.status(200).send({movie});
})

//delete => delete a single user
app.delete("/movies/:id",async(req,res)=>{
    const movie = await Movie.findByIdAndDelete(req.params.id);
    return res.status(200).send({movie});
})
app.listen(3456,async function(){
    await connect();
    console.log("Listening on port 3456");
})
