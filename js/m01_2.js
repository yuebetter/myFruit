var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

var dbUrl="mongodb://localhost:27017";

MongoClient.connect(dbUrl,{useNewUrlParser:true},function(err,db2){
	if(err){
		console.log("连接数据失败")
	}else{
		console.log("数据库连接成功")
		var dbase = db2.db("my1807");
		
		var arr=[
			{name:"aa",age:18},
			{name:"bb",age:28},
			{name:"cc",age:20}
		]
		dbase.collection("info2").insertMany(arr,function(err,result){
			if(err){
				console.log("数据添加到mongodb失败")
			}else{
				console.log("数据添加到mongodb成功",result.result)
				console.log("数据添加到mongodb成功",result.insertedCount);
				db2.close();
			}
		})
	}
})
