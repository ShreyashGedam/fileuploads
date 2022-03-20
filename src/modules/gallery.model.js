const mongoose = require("mongoose")

const galleryschema = new mongoose.Schema({
    userpictures : [{type : String , required : true}],

    userid : {type : mongoose.Schema.Types.ObjectId , ref : "user" , required : true}
})

module.exports = mongoose.model("gallery",galleryschema)