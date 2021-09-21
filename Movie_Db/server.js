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
    name:{type:String,require:true},
    price:{type:Number,require:true},
    size:{type:Number,require:false},
})

//connect schema to the user collection
const Product = mongoose.model("product",userSchema);
//-----------CRUD----------------//
//post create product
app.post("/products",async(req,res)=>{
    const product = await Product.create(req.body);//insert product
    return res.status(201).send({product});
})
//
app.listen(3456,async function(){
    await connect();
    console.log("Listening on port 3456");
})
