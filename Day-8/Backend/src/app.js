// server ko create kerna 
// server ko config kerna

const express = require("express")
const noteModel = require("./Models/note.model")

const app = express()

app.use(express.json())

//POST
app.post("/api/notes", async (req,res)=>{
    const {title , description} = req.body

    const notes = await noteModel.create({
        title,description
    })

    res.status(201).json({
        message : "Note created successfully",
        notes
    })
})


// GET 
app.get("/api/notes",async(req,res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message : "Note fetch successfully"
    })
})


//DELETE
app.delete("/api/notes/:id", async(req,res)=>{
    const id = req.params.id

    await noteModel.findByIdAndDelete(id)


    res.status(200).json({
        message : "Note deleted successfully"
    })

})

// PATCH
app.patch("/api/notes", async(req,res)=>{
    const id = req.params.id
    const {description} = req.body

    await noteModel.findByIdAndUpdate(id,{description})
    
     res.status(200).json({
        message : "Note updated successfully"
    })
})

module.exports = app