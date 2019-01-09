//mongodb操作流程
var mongodb=require("mongodb");
var MongoClient=mongodb.MongoClient;
//连接到哪
var dbUrl="mongodb://localhost:27017";
var dbName="myFurit"

//添加数据函数（cd在这里作为回调函数）
module.exports.insertOne=function(res,cName,obj,cb){
	//调用连接数据库的函数（）
	connectMGDB(function(dbase,db){
		//添加操作
		dbase.collection(cName).insertOne(obj,function(err,result){
			cb(err,result,db)
		})
	},res)
}

module.exports.insertMany=function(res,cName,arr,cb){
	//调用连接数据库的函数（）
	connectMGDB(function(dbase,db){
		//添加操作
		dbase.collection(cName).insertMany(arr,function(err,result){
			cb(err,result,db)
		})
	},res)
}

//查询数据
module.exports.find=function(res,cName,whereObj,cb){
	//调用连接数据库的函数（）
	whereObj.find ? whereObj.find : whereObj.find={};
	whereObj.sort ? whereObj.sort : whereObj.sort={};
	whereObj.limit ? whereObj.limit : whereObj.limit=0;
	whereObj.skip ? whereObj.skip : whereObj.skip=0;
	
	connectMGDB(function(dbase,db){
		dbase.collection(cName).find(whereObj.find).sort(whereObj.sort).limit(whereObj.limit).skip(whereObj.skip).toArray(function(err,result){
			cb(err,result,db)
		})
	},res)
}

//封装的mongodb连接函数
function connectMGDB(cb,res){
	//1.连接数据库
	MongoClient.connect(dbUrl,{useNewUrlParser:true},function(err,db){
		if(err){
			console.log("连接数据库失败",err);
			res.send({error:1})
		}else{
			//连接到那个数据库
			var dbase=db.db(dbName);
			//操作（调用函数）
			cb(dbase,db)
		}
	})
}


