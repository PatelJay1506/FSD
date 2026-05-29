//Write a Nodejs script to take "0 1 -9 20 33 -44 50" elements separated by white space in .txt file. Print sorted array of these 5 elements on Node Js server.



var fs=require("fs");
fs.writeFileSync('num.txt',"0 1 -9 20 33 -44 50")
data=fs.readFileSync('num.txt','utf8')
ans=data.split(" ").sort()
console.log(ans)
