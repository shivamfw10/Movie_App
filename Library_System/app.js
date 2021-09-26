const express = require("express");
const mongoose = require("mongoose");
//connect database
const connect=()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/library");
}
//---------------------------------------User---------------------------//
//Create schema for user
const userSchema = new mongoose.Schema({
    id:{type:Number,required:true},
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:{type:String,required:true},
    gender:{type:String,required:true}
})
const User = mongoose.model("user",userSchema);
//------------------------------------Books----------------------------//
const userBooks = new mongoose.Schema({
    book_name:{type:String,required:true},
	body:{type:String,required:true},
    author:{type:mongoose.Schema.Types.ObjectId,ref:"author",required:true},
},{
    versionKey:false,
    timestamps:true,
})
const Books = mongoose.model("book",userBooks);
//-----------------------------------Author-------------------------//
//Step 1: create schema for Author
const authorSchema = new mongoose.Schema({
    f_name:{type:String,required:true},
	l_name:{type:String,required:true},
    books:{type:mongoose.Schema.Types.ObjectId,ref:"books",required:true},
},{
    versionKey:false,
    timestamps:true,
})
//Step 2: create collection for Author
const Author = mongoose.model("author",authorSchema);
//-------------------------------------------CheckedOut-------------------------//
//Step 1: create schema for checkout
const checkoutSchema = new mongoose.Schema({
    name:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true,
})
//Step 2: create collection for checkout
const CheckedOut = mongoose.model("checkout",checkoutSchema);

const app = express();
app.use(express.json());
//------------------------------------------CRUD for Users-----------------------//
//create a user
app.post("/users",async (req,res)=>{
    const user = await User.create(req.body);//db.user.insert();
    return res.status(201).send({user});
})
//get all users
app.get("/users",async (req,res)=>{
    const users = await User.find().lean().exec();
    return res.status(201).send({users});
})
//pacth update a user
app.patch("/users/:id",async (req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    return res.status(201).send({user});
})
//delete a user
app.delete("/users/:id",async (req,res)=>{
    const user = await User.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send({user});
})
//get a single user
app.get("/users/:id",async (req,res)=>{
    const user = await User.findById(req.params.id).lean().exec();
    return res.status(201).send(user);
})
//------------------------------------------CURD for Section--------------------//
app.post("/sections",async (req,res)=>{
    const section = await User.create(req.body);//db.user.insert();
    return res.status(201).send({section});
})
//get all section
app.get("/sections",async (req,res)=>{
    const sections = await User.find().lean().exec();
    return res.status(201).send({sections});
})
//pacth update a section
app.patch("/sections/:id",async (req,res)=>{
    const section = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    return res.status(201).send({section});
})
//delete a section
app.delete("/sections/:id",async (req,res)=>{
    const section = await User.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send({section});
})
//get a single section
app.get("/sections/:id",async (req,res)=>{
    const section = await User.findById(req.params.id).lean().exec();
    return res.status(201).send(section);
})
//------------------------------------------CURD for Books--------------------//
app.post("/books",async (req,res)=>{
    const book = await User.create(req.body);//db.user.insert();
    return res.status(201).send({book});
})
//get all books
app.get("/books",async (req,res)=>{
    const books = await User.find().lean().exec();
    return res.status(201).send({books});
})
//pacth update a book
app.patch("/books/:id",async (req,res)=>{
    const book = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    return res.status(201).send({book});
})
//delete a book
app.delete("/books/:id",async (req,res)=>{
    const book = await User.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send({book});
})
//get a single book
app.get("/books/:id",async (req,res)=>{
    const book = await User.findById(req.params.id).lean().exec();
    return res.status(201).send(book);
})
//------------------------------------------CURD for Author--------------------//
app.post("/authors",async (req,res)=>{
    const author = await User.create(req.body);//db.user.insert();
    return res.status(201).send({author});
})
//get all authors
app.get("/authors",async (req,res)=>{
    const authors = await User.find().lean().exec();
    return res.status(201).send({authors});
})
//pacth update a author
app.patch("/authors/:id",async (req,res)=>{
    const author = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    return res.status(201).send({author});
})
//delete a author
app.delete("/authors/:id",async (req,res)=>{
    const author = await User.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send({author});
})
//get a single author
app.get("/authors/:id",async (req,res)=>{
    const author = await User.findById(req.params.id).lean().exec();
    return res.status(201).send(author);
})

//------------------------------------------CURD for Checkout--------------------//
app.post("/checkouts",async (req,res)=>{
    const checkout = await User.create(req.body);//db.user.insert();
    return res.status(201).send({checkout});
})
//get all authors
app.get("/checkouts",async (req,res)=>{
    const checkouts = await User.find().lean().exec();
    return res.status(201).send({checkouts});
})
//pacth update a author
app.patch("/authors/:id",async (req,res)=>{
    const checkout = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    return res.status(201).send({checkout});
})
//delete a author
app.delete("/checkouts/:id",async (req,res)=>{
    const checkout = await User.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send({checkout});
})
//get a single author
app.get("/checkouts/:id",async (req,res)=>{
    const checkout = await User.findById(req.params.id).lean().exec();
    return res.status(201).send(checkout);
})

app.listen("1443", async(req,res)=>{
    await connect();
    console.log("listen on Port 1443");
})