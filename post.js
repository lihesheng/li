//post请求
var http = require("http")
var _form = '<form method="post">' +
				'网站名<input name=name><br>' +
				'年龄<input name=age ><br>' +
				'<input type="submit">' +
			'</form>'
var querystring = require("querystring")
http.createServer(function (req,res){
	var body = ""
	req.on("data",function (_d){
		body += _d;
		//此时读到的是一个字符串
		console.log(body)
	})
	req.on("end",function (){
		body = querystring.parse(body)
		console.log(body)
		res.writeHead(200,{"Content-Type":"text/html;charset=utf8"})
		if(body.name) {
			res.write("网站名:" + body.name)
			res.write("<br>")
			res.write("年龄:" + body.age)
		}else {
			res.end(_form)
		}	
	})
}).listen(6767)