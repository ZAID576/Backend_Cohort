// server ko create kerna 
// server ko config kerna 

const express = require("express")
const noteModel = require("./model/notes.noteModel")

const app = express()

app.use(express.json())

app.post("/notes",(req,res)=>{
   const { title , description } = req.body

   noteModel.create({
    title,description
   })
})

module.exports = app 