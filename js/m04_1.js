var mongodb = require("mongodb");//引入mongodb模块
var MongoClient =mongodb.MongoClient;
//1.创建MongoClient对象，用来连接数据
//2.数据库地址，端口号
var dbUrl="mongodb://localhost:27017";

//3.关联数据库
MongoClient.connect(dbUrl,{useNewUrlParser:true},function(err,db2){
	//4.判断是否连接数据库成功
	if(err){
		//将连接失败的信息1返回给前台
		console.log("连接数据库失败",err)
	}else{
		console.log("连接数据库成功");
		//5。关联数据库
		var dbase = db2.db("mydb1809");
		//数据
		var whereObj={
			_id:mongodb.ObjectId("5c33f1f4f391c89578f8360a")
		}
		
		
		
		console.log("dbase:",dbase)
		//6.dbase要操作的数据库；collection关联集合，insert，如何操作数据（插入）
		dbase.collection("mybiao1").deleteOne(whereObj,function(err,result){
			if(err){
				console.log("更改失败")
				//该操作失败的信息2返回给前台
			}else{
				console.log("更改成功",result);
				db2.close();
				//将操作成功的信息3返回给前台
			}
		})
		
	}
})
