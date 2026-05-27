var fs=require('fs')
// fs.mkdirSync("13326L")
// fs.writeFileSync("13326L/Lec1.txt","Module 1")
var data= fs.readFileSync('13326L/Lec1.txt','utf8')
console.log(data)
fs.unlinkSync("13326L/Lec1.txt")
fs.rmdirSync("13326L")
console.log("Program Ended")

