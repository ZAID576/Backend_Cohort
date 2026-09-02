// server ko start kerna 
// database se connect kerna 


const app = require("./src/app")
const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect("mongodb+srv://zkonline576_db_user:yEwCCC8tNWciPlZQ@cluster0.j0sggcl.mongodb.net/Day-6")
    .then(()=>{
        console.log("Connected to Database")
    })
} 

connectToDb() // server connect


app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000")
}) //server start