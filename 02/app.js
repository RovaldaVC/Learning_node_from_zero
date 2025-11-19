//importing logger.js here
const logger = require('./logger');

//adding logger functions here
logger.log("arshia")

//adding packages from the base(default installed packages) of node.
//node:path is a package for path info's.
const path = require('node:path');

//asking for this file's path.
const data = path.parse(__filename);

//returning the file's path.
console.log(data)

//importing os package which is for info's of operating system.
const os = require('node:os');

// creating a total value that shows the full amount of ram we have.
const total = os.totalmem()

// creating a free value that shows the amount of ram we have as free.
const free = os.freemem()

//returning free value and total value
console.log(total, free)

//importing fs(file system) package
const fs = require('node:fs')

//using readdir function from fs module.(no need to use sync, we are just trying out.)
const files = fs.readdirSync('./')

//creating it in asynchronos way.
const files2 = fs.readdir('./', (err, files)=>{
    // we use `` to be able to use '$' which is the same as f{} in python.
    if (err) console.log(`error : ${err}`)
    else console.log(files)
})

//returning whole files of this folder. 
console.log(files, files2)

//importing event module.
const EventEmitter = require('node:events');

//creating a sample for node:events.
const emitter = new EventEmitter();

//adding listeners for emitter; we create listeners with actions and a name for the ring('MessageLogged')
emitter.on('MessageLogged', (data)=>{
    console.log("Listener called.", data)
})

// calling emit from emitter. emit is a ring for actions; when you call it's name some actions with the same name will start running(here MessageLogged will be ran).
//the second part in {} is a data we have. to call it we go to out emitter.on and call it as data in the second parameter which is for creating a function.
emitter.emit("MessageLogged", {id:1, name:"arshia"});

//importing HTTP module which is for creating backend server.
const http = require('node:http')

//creating a server with HTTP.
const server = http.createServer((req, res)=>{
    if (req.url === "/"){
        res.write("hello from home page")
        res.end()
    }
    if(req.url === '/api/course'){
        res.write(JSON.stringify(['html','css']))
        res.end()
    }
})

//adding a function for our server when a new connection happens.
//server.on("connection", (socket)=>{
//    console.log("new connection is connected.")
//})

//defining a port for our server.
server.listen(3000)

//returning the server port here.
console.log("server is listening on port 3000")