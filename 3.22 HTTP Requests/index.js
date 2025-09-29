import express from "express";
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send("Hello this is the homepage ");

});
app.get("/contacts",(req,res)=>{
    res.send("Phone no: 782389291167");

});
app.get("/about",(req,res)=>{
    res.send("I am learning Express with nodeJs ");
    
});
app.listen(port,()=>{
    console.log(`Server is runner on ${port}`);
});