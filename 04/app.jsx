const express = require("express")
const app = express()

//req means from client(frontend) to server(backend).
//res means the answer from server(backend) to client(frontend).
app.get("/", (req, res)=>{
    //send means return the data.
    res.send("Hello from Arshia")
})

app.listen(3000, ()=>{
    console.log("Listening port 3000")
})