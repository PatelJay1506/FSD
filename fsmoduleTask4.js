// //Write node js script and json to perform below tasks. 

// 1.	Write below object in txt file named input.txt  

// {data:{a:15,b:20,c:[40,30]}}

// 2.	Read data from the same file and perform the below tasks.

// a.	addition of a and b.

// b.	subtraction of 2nd element of c and b. (Must be positive value)

// c.	multiplication of elements of c.

// 3.	Add the Output of addition, subtraction and multiplication below the object in output.txt file.

var da={data:{a:15,b:20,c:[40,30]}}
var fs=require('fs')
fs.writeFileSync('input.txt',JSON.stringify(da))
rd=JSON.parse(fs.readFileSync('input.txt','utf8'))
var sum= rd.data.a+rd.data.b
var sub= rd.data.c[1]-rd.data.b
var mul=rd.data.c[0]*rd.data.c[1]
fs.writeFileSync('output.txt',`Sum : ${sum}\nSub : ${sub}\nMul : ${mul}`)

