var mongodb = require("mongodb");//引入mongodb
var MongoClient = mongodb.MongoClient;
//创建MongoClient对象,用来连接数据
//数据库地址,端口号,数据名称
var dbUrl="mongodb://localhost:27017";
//关联数据库
MongoClient.connect(dbUrl,{useNewUrlParser:true},function(err,db){
	if(err){
		console.log("连接数据库失败");//网络中断/数据库地址错误/端口号错误/数据服务没有启动
	}else{
		console.log("数据库连接成功");
		var dbase = db.db("test");//数据库名
		
		dbase.collection("mybiao4").drop(function(err,str){
			if(err){
				
			}else{
				console.log("str:",str);
				db.close();
			}
		})
	}
})
