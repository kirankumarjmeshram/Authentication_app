
const app = require("./index");

const connect = require("./configs/db.js");


app.listen(1234, async (req,res)=>{
    await connect();
    console.log("listening on port 1234");
})