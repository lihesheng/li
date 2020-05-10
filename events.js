//nodejs里面的事件是通过events模块来触发的
var _event = require("events")
var _EventEmitter = new _event.EventEmitter()
// console.log(_EventEmitter)
//这里的事件名只是一个标识,其实他只是绑定了一个回调函数
_EventEmitter.on("event事件",function (){
	// 也可以把console.log()这句话放在单独的函数中
	console.log('这个事件已经被触发了')
	
})
// 触发事件,有多少个可以触发多少个
_EventEmitter.emit("event事件")
console.log(_EventEmitter)
// ---------------------------------------------------------------
_EventEmitter.on("918事件",fn);
function fn(){
	console.log("918事件已经被触发了")
}
_EventEmitter.emit("918事件")
//---------------------------------------------------------------
//使用SetTimeout()来进行触发
var _EventEmitter = require("events").EventEmitter;
var _event = new _EventEmitter()
_event.on("timeout",function (){
	console.log("timeout事件已经被触发")
})
setTimeout(function() {
	_event.emit("timeout")
},2000);
//---------------------------------------------------------------
//可以在一个实例上.通过.on方法绑定多个事件,通过.emit()进行触发
var _EventEmitter = require("events").EventEmitter;
var _event = new _EventEmitter()
_event.on("li",function (){
	console.log("黎河生已经被触发了")
})
_event.on("li",function (){
	console.log("于芳已经被触发了")
})
_event.emit("li")
//也可以进行传参,下面就实现了传参
var _EventEmitter = require("events").EventEmitter;
var _event = new _EventEmitter()
_event.on("li",function (a,b){
	console.log("黎河生已经被触发了",a)
})
_event.on("li",function (a,b){
	console.log("于芳已经被触发了",b)
})
_event.emit("li","lihe","yufang")