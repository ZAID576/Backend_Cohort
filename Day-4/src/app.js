//app.js file ka 2 kaam hota hai
// 1st -  server create kerna
// 2nd -  server ko config kerna


const express = require("express")

const app = express() // server created

app.use(express.json())

const notes = []


// app.get("/",(req,res)=>{
//    res.send("Hello World")
// })

app.post("/notes", (req,res)=>{
  console.log(req.body)
  console.log(notes)
  notes.push(req.body)
  res.send("notes send")
})

app.get("/notes",(req,res)=>{
  res.send(notes)
})

app.delete("/notes/:index",(req,res)=>{
  console.log(req.params.index)
})

module.exports = app