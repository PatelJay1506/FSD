var fs= require('fs')
// fs.writeFileSync('hello.txt',"Good Morning")
// fs.appendFileSync('hi.txt','\nin it is warm Day')
// var data=fs.readFileSync("hello.txt")
var data2=fs.readFileSync("hi.txt","utf8")
// console.log(data.toString())
console.log(data2)

// fs.renameSync('hello.txt','HelloTanay.txt')
// fs.unlinkSync('hi.txt') // Deleted hi.txt
console.log("Program Ended")

