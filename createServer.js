// 使用nodejs来创建http服务
 var _http = require("http")
 console.log(_http)
 _http.createServer(function (request,response){
	 response.writeHead(200,{'Content-Type':'text/plain'});
	 response.end('这是第一个http服务');
 }).listen(8083)
 
 console.log(8083)