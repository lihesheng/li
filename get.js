var _http = require("http")
var _util = require("util")
var _url = require("url")
_http.createServer(function (req,res) {
	res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"})
	//res.end("创建成功")//end只能向页面发送字符串
	//console.log(_url.parse(req.url))
	//res.end(_util.inspect(_url.parse(req.url)))
	
	var a = _url.parse(req.url,true).query//下面这种写法一定要加上true
	console.log(a)
	res.write("姓名:" + a.name)
	res.write("\n")
	res.write("年龄:" + a.age)
	res.end()
}).listen(7788)
//----------------------------------------------------------------------
