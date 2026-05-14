const express = require("express");
const app = express();
const ejs = require("ejs");
const port = 2345;

app.set("view engine","ejs");

app.get("/welcome",(req,res)=>{
    res.send("welcome to my server");
})

app.get("/ejs",(req,res)=>{
    res.render("index");
})

app.get("/ejss",(req,res)=>{
    res.render("script");
})
app.listen(port,()=>{
    console.log("App is listening on port 2345");
    
})