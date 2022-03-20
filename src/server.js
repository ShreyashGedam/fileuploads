const app = require("./index")

const connect = require("./configs/db")

app.listen(5000, async ( req , res) =>
{
    await connect()
    
    console.log("listening on the server 5000")
})