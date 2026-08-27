const express = require("express")

const app = express() // server create

app.use(express.json()) // Middleware

const notes = []

app.post("/notes",(req,res)=>{
    console.log(req.body)
    res.send("note created")
})
  
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})  // server start