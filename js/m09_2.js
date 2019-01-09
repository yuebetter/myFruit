var mongodb = require("mongodb");//引入mongodb模块
var MongoClient =mongodb.MongoClient;
//1.创建MongoClient对象，用来连接数据
//2.数据库地址，端口号
var dbUrl="mongodb://localhost:27017";

//3.关联数据库
MongoClient.connect(dbUrl,{useNewUrlParser:true},function(err,db){
	//4.判断是否连接数据库成功
	if(err){
		console.log("连接数据库失败")
	}else{
		console.log("连接数据库成功")
		var dbase=db.db("mydb1809")
		var whereObj={
			
		}
		dbase.collection("mybiao4").estimatedDocumentCount(whereObj).then(function(count){
			console.log("count:",count);
			db.close()
		})
	}
})