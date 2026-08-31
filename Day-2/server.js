const express = require("express")

const app = express()

app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.get ( "/Home",(req,res) => {
    res.send("This is Home")
})


app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
}); 

jjj