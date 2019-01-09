var mongodb = require("mongodb");//引入mongodb模块
var MongoClient =mongodb.MongoClient;
//1.创建MongoClient对象，用来连接数据
//2.数据库地址，端口号
var dbUrl="mongodb://localhost:27017";

//3.关联数据库
MongoClient.connect(dbUrl,{useNewUrlParser:true},function(err,db){
	//4.判断是否连接数据库成功
	if(err){
		//将连接失败的信息1返回给前台
		console.log("连接数据库失败")
	}else{
		console.log("连接数据库成功");
		//5。关联数据库
		var dbase = db.db("mydb1809");
		//数据
		var whereObj={
			
		}
		
		//三目运算符：
		
		console.log("dbase:",dbase)
		//6.dbase要操作的数据库；collection关联集合，insert，如何操作数据（插入）
		dbase.collection("mybiao4").countDocuments(whereObj).then(function(count){
			console.log("count:",count);
			db.close()
		})
		
		}
})
