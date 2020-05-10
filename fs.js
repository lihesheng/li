// 同步加载文件的方法
var _fs = require('fs')
var _data = _fs.readFileSync("nodejs.txt")
/* 此时的_data是二进制流,需要调用toString()方法才能显示中文 */
console.log(_data.toString())
console.log("--------------")
console.log("于芳是个坏孩子")
//这种操作其实已经形成了阻塞,不会进行异步的加载,如果文件过大,会一行一行进行加载


// 基于回调异步加载文件的方法
_fs.readFile('nodejs.txt',function (err,data){
	if(err) return err;
	console.log(data.toString())
})
console.log("黎河生")
console.log("于芳")


