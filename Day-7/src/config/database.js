const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect("mongodb+srv://ZAID:UP9LeA074mLhnqlS@cluster0.grox7jd.mongodb.net/Day-7")
    .then(()=>{
        console.log("Server is connected to Database")
    })
}

module.exports = connectToDb