var EventEmiter= require('events')
var fs=require("fs")
var e =new EventEmiter()
// e.on('sayname',()=>{
//     console.log("My name is Tanay")
// })
// e.emit('sayname')

// fun= ()=>{
//     console.log("hello")
// }
// fun2= ()=>{
//     console.log("hi")
// }
// e.on('a',fun)
// e.on('b',fun2)
// e.emit('b')
// e.emit('a')
// e.addListener("states",(code,msg)=>{
//     console.log(code+" "+msg)
// })
// e.emit('HEllo','Kem chho')

e.on("ijh/write",()=>{
    fs.writeFileSync("abc.txt","sdfghjkl")
    console.log("write done")
    e.emit("append")
})

console.log(data)
e.on("read",()=>{
    data=fs.readFileSync("abc.txt","utf-8")
})

e.on("append",()=>{
    fs.appendFileSync("abc.txt","\nzxcghjk")
    console.log("append done")
    e.emit("read")
})
// e.emit("write")