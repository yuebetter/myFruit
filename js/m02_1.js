var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

var dbUrl="mongodb://localhost:27017";

MongoClient.connect(dbUrl,{useNewUrlParser:true},function(err,db){
	if(err){
		console.log("连接数据库失败")
	}else{
		console.log("连接数据库成功")
		var dbase=db.db("mydb1807");
		
		dbase.collection("info2").find().toArray(function(err,result){
			if(err){
				console.log("查询数据失败")
			}else{
				console.log("查询数据成功",result);
				db.close()
			}
		})
	}
})
