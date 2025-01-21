const express = require("express");
const app=express();
const port =3000;

app.use("/test",(req,res)=>{
    res.send("Hi Umang");
})
app.listen(port,()=>{
    console.log("Server id running on 3000 Hello umang");
})