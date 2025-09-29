
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";

import{dirname}from "path";
import{fileURLToPath}from "url";                            //for file retrieval from public folder
const __dirname=dirname(fileURLToPath(import.meta.url));    //assigns or gets to url automatically

const port=3000;
const app=express(); 
 
                         
app.use(bodyParser.urlencoded({extended:true}));    



function password(req,res,next){
    console.log(req.body);
    const password=req.body["password"];
    if (password==="ILoveProgramming"){
        req.userIsAuthorised=true;
    }
    next();
}
app.use(password);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
});

app.post("/check",(req,res)=>{ 
    if (req.userIsAuthorised){
        res.sendFile(__dirname+"/public/secret.html");
    }else{
        res.sendFile(__dirname+"/public/index.html");
    }
});


app.listen(port,()=>{
    console.log(`Server is running in port ${port}`);
});


