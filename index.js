require("dotenv").config()
const express = require("express");
const app = express();

app.get("/" , (req , res)=>{
  res.send(" iam your boss")
})

app.listen(process.env.PORT , ()=>{
    console.log("my server is run on this port ")
})