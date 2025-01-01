var express=require('express');
var app=express();

app.get("/",(req,res)=>{
    res.send('<h1>Home Page</h1>')
});

app.get("/",(req,res)=>{
    res.send('<h1>Contact</h1>')
});
app.get("/**,",(req,res)=>{
    res.send('<h1>Page not found</h1>')
})    
