var express=require("express");
var bodyParser=require("body-parser")
var urlencodedParser=bodyParser.urlencoded({extended:false});//1.1接收前台用post传递过来的字符串
var entry=require("./apps/entry")
console.log("entry:",entry)

app=express()

//静态资源
app.use(express.static("./views"))
app.use(express.static("./public"))


var page1="index.html";
var page2="entry.html";
var page3="show.html";

//显示出主页界面
app.get("/",function(req,res){
	res.sendFile(__dirname+"/views/"+page1)
})

//显示出录入系统界面
app.get("/entry",function(req,res){
	res.sendFile(__dirname+"/views/entry/"+page2)
})

//显示出展示商品界面
app.get("/show",function(req,res){
	res.sendFile(__dirname+"/views/show/"+page3)
})

//post方式传递数据
app.post("/addPost",urlencodedParser,entry.entryAddPost)
//获取数据
app.post("/getDataPost",urlencodedParser,entry.entryGetDataPost)
//删除数据
//app.post("/addPost",urlencodedParser,entry.entryDelDataPost)

app.listen(81,function(){
	console.log("ok 81")
})













