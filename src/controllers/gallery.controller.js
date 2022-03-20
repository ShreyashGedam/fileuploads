const express  = require("express")
const req = require("express/lib/request")
const uploads = require("../middlewares/uploads")

const Gallery = require("../modules/gallery.model")

const router = express.Router()

router.get("", async ( req , res) =>
{
    const user = await Gallery.find().lean().exec()

    return res.send(user)
})

router.post("", uploads.any("userpictures") ,async (req , res) =>
{
    const filepath = req.files.map((file) =>
    {
        return file.path
    })

    const user = await Gallery.create({
        userid : req.body.userid,
        userpictures : filepath
    })
} )

module.exports = router