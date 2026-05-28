var fs= require('fs')
fs.writeFile('hello.txt',"good bye",(err)=>{
    if(err) throw err
    console.log("write operation enter ")
})

fs.appendFile("hello.txt","It is Great DAy",(err)=>{
    if(err) throw err
    console.log("Append Done ")
})

fs.readFile('hello.txt','utf8',(err,data)=>{
    if(err) throw err
    console.log(data)
    console.log("read operation Done.")
})