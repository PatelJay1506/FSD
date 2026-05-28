var eve= require("events")
var e= new eve()
var fs=require("fs")
e.on('write',()=>{
    fs.writeFile('new.txt','this is data',err=>{
        if(err) throw err
        console.log("write Done")
        e.emit('append')
    })
})
e.on('append',()=>{
    fs.appendFile('new.txt',"That is data ",err=>{
        if(err) throw err
        console.log("apend done")
        e.emit('read')
    })
})

e.on('read',()=>{
    fs.readFile('new.txt',"utf-8",(err,data)=>{
        if(err) throw err
        console.log(data)
        e.emit('final')
    })
})

e.on('final',()=>{
   console.log("thank you")
})
e.emit('write')