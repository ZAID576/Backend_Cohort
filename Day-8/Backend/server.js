// server ko start kerna 
// server ko database se connect kerna

require("dotenv").config()
const connectToDB = require("./src/config/database")
const app = require("./src/app")

connectToDB()

app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000")
})