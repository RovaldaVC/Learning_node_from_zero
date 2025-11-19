var name = "arshia"

const log = (data) => {
 console.log(data)
}

// giving permission to log function to be exported with the name log(.log for the name) in other files.
module.exports.log = log

//module.exports.name = name we dont want that to be open source.

//every module installed.
console.log(module)