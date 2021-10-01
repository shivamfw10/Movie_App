const mongoose = require("mongoose");
const express = require("express");
const Books = require("./books.json");
const app = express();

app.use(express.json());
//Problem 1
app.get("/",async (req,res)=>{
    //const users = await Books.({book:Books}).lean().exec();
    return res.status(200).send({books:Books});
})
//Problem 2
app.post("/books",async (req,res)=>{
    Books.push(req.body);
    return res.status(201).send(Books);
})
//Problem 3
app.get("/books/:id",async (req,res)=>{
    for(let i=0;i<Books.length;i++){
        if(Books[i].id==req.params.id){
            return res.status(200).send(Books[i]);
        }
    }
})
//Problem No 4
app.patch("/books/:id",async (req,res)=>{
    const books = req.body.author;
    console.log(books);
    for(let i=0;i<Books.length;i++){
        if(Books[i].id==req.params.id){
            Books[i].author=books
            return res.status(200).send(Books[i]);
        }
    }
})
//Problem No. 5 
app.delete("/books/:id",async (req,res)=>{
    for(let i=0;i<Books.length;i++){
        if(Books[i].id==req.params.id){
            delete Books[i];
            return res.status(200).send(Books[i]);
        }
    }
})
// //Problem 1 Second Method
// app.get("/",async (req,res)=>{
//     const users = await Books.find().lean().exec();
//     return res.status(200).send(users);
// })
// app.post("/books",validate({api_requested_by:"required",api_requested_by:"Shivam"}),function (req,res){
//     console.log("Requested by Shivam");
//     return res.send(books);
// })

// app.get("/",(req,res)=>{
//     //console.log("Home Page Get Request");
//     res.send(books);
// });

// app.post("/books/:id",(req,res)=>{
//     res.send(books);
// });



app.listen(2122,()=>{
    console.log("Listen on Port 2122");
})