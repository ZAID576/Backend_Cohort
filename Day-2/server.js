const express = require("express")

<<<<<<< HEAD
const app = express() // server created
=======
const app = express()
>>>>>>> 15f0dfc425127656753c4edacdfe677f58f692fd

app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.get ( "/Home",(req,res) => {
    res.send("This is Home")
})


app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
<<<<<<< HEAD
});  // server started
=======
}); 
>>>>>>> 15f0dfc425127656753c4edacdfe677f58f692fd
