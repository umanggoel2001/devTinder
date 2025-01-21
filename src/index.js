const express = require("express");
const app=express();
const port =3000;

app.use("/test",(req,res)=>{
    res.send("Hi Umang");
})
app.get("/user", (req,res)=>{
    res.send("data coming from server");
})

app.post("/user", (req,res)=>{
    res.send("Data saved to DB successfully");
})
app.listen(port,()=>{
    console.log("Server id running on 3000 Hello umang");
})