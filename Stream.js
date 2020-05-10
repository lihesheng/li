var fs = require("fs")
var data = ""
//创建一个可读流createReadStream
var readStream = fs.createReadStream("nodejs.txt")
//设置可读流的文件编码
readStream.setEncoding("utf-8")
//处理流的事件 data end
readStream.on("data",function (_data){
	data += _data;
})
readStream.on("end",function (){
	//console.log(data)
})
//----------------------------------------------------
//写入文件
// var _fs = require("fs")
// var _data = "我叫黎河生,我今年23岁了,我特别有钱";
// var writeStream = _fs.createWriteStream("li.txt")
// writeStream.write(_data,"utf-8")
// writeStream.on("finish",function (){
// 	console.log("x写入完成")
// })
// //----------------------------------------------------
// //管道流pipe()
// var f = require("fs")
// var a = f.createReadStream("nodejs.txt")
// var b = f.createWriteStream("he.txt")
// a.pipe(b)
// //----------------------------------------------------
// //解压文件
// var c = require("fs")
// var zlib = require("zlib")
// var d = c.createReadStream("nodejs.txt")
// d.pipe(zlib.createGzip())
// var e = c.createWriteStream("nodejs.zip")
// d.pipe(e)
// console.log("压缩完毕")

