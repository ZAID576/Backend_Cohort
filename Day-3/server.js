const express = require("express")

const app = express() // server create

app.use(express.json()) // Middleware 

const notes = []

app.post("/notes",(req,res)=>{
    console.log(req.body)
    notes.push(req.body)
    res.send("note created")
}) //API 

app.get("/notes", (req,res)=>{
     res.send(notes)
}) //API
  
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})  // server start 