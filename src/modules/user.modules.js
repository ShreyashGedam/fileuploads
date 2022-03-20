const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    firstname : {type : String , required : true},

    lastname : {type : String , required : true},

    profilepic : [{type : String , required : true }]
 
})

module.exports = mongoose.model("user",userschema)