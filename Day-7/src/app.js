// server ko create kerna 
// server ko config kerna 

const express = require("express")
const noteModel = require("./models/notes.model")

const app = express()

app.use(express.json())

// post
app.post("/notes",async (req,res)=>{
   const { title , description } = req.body

   const notes  = await noteModel.create({
    title,description
   })

   res.status(201).json({
    message : "Note created successfully",
    notes
   })
})

//get
app.get("/notes",async (req,res)=>{
    const notes = await noteModel.find()
    
    res.status(200).json({
    message : "Note fetch successfully",
    notes
   })
    
})

module.exports = app 