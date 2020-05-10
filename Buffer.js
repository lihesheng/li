var _buffer = Buffer.alloc(10)
var _name = _buffer.write("黎河生")
console.log(_name)
console.log(_buffer.toString())
// toString()方法可以从缓存区中向出来读内容,可以指定对应的编码和要显示的文字
//toString('utf-8',3,6)
//------------------------------------------------------------------------
//批量的输出26个英文字母
const buf = Buffer.alloc(26)
for(let i=0;i<26;i++) {
	buf[i] = i + 97;
}
console.log(buf.toString())
console.log(buf.toString('ascii'))
//------------------------------------------------------------------------
//将Buffer转换为json对象
var buf1 = Buffer.from([0x1,0x2,0x3,0x4,0x5])
var _buf = buf1.toJSON()//一步到位
var buf2 = JSON.stringify(buf1)//需要两步进行实现
console.log(buf2)
var buf3 = JSON.parse(buf2)
console.log(buf3)
//console.log(buf3.data)
//console.log(_buf.data)