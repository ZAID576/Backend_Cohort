// server ko create kerna 
// server ko config kerna

const  express = require("express")

const app = express()

app.use(express.json())

const notes = []

// POST 
app.post("/notes",(req,res)=>{
  notes.push(req.body)

 res.status(201).json({
   message : "Note created successfully"
 })
})

// GET
app.get("/notes", (req,res)=>{
    res.status(200).json({
        notes : notes
    })
})

// DELETE 
app.delete("/notes/:index",(req,res)=>{
   delete notes [req.params.index]

   res.status(204).json({
     message : "Note deleted successfully"
   })
})

// PATCH
app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description = req.body.description

    res.status(200).json({
        message : "Note updated successfully"
    })
})

module.exports = app