//Defining an array of object with properties name and age. Write this object in a file named student.txt then read the file and display the object on console

a= [
    {name:"abc",age:22},
    {name:"def",age:22}
]
var fs=require('fs')
fs.writeFileSync('data.txt',JSON.stringify(a))

data=fs.readFileSync('data.txt','utf8')
console.log(data)
fs.copyFileSync('data.txt','student.txt')
data=JSON.parse(fs.readFileSync('student.txt','utf8'))
console.log(data[0].name+" "+data[0].age)
console.log()