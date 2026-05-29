const shape=[{"name":"circle","diameter":8},{"name":"square","side":10}]
var fs=require('fs')
var cir=3.14*(shape[0].diameter)
var sq=4*(shape[1].side)
var ans=
fs.writeFileSync('shape.txt',JSON.stringify(shape))
fs.appendFileSync('shape.txt',`\nperimeter of Circle : ${cir}\n perimeter of squre : ${sq}`)

