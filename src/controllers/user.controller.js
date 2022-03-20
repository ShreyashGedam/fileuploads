const express = require("express")

const User = require("../modules/user.modules")

const router = express.Router()

const uploads = require("../middlewares/uploads")   

router.get("",async ( req , res) =>
{
    const user = await User.find().lean().exec()

    return res.send(user)
})

router.post("",uploads.single("profilepic"), async (req ,res ) => 
{
    const user = await User.create(
        {
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            profilepic : req.file.path
        }
    ) 
    
    return res.send(user)
})

module.exports = router