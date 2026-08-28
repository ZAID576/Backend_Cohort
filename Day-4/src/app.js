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


// DELETE /notes
// delete /notes/0

app.delete("/notes/:index",(req,res)=>{
  delete notes[req.params.index]

  res.send("note deleted successfully")
})

// PATCH /notes/:index
// req.body = {description :- "sample modified description."}
app.patch("/notes/:index",(req,res)=>{
  notes[req.params.index].description = req.body.description
  notes[req.params.index].titles = req.body.titles
  res.send("note updated successfully")
})


module.exports = app