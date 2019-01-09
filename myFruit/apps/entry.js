var getTime=require("./../modules/getTime");
console.log("getTime:",getTime)
console.log("getTime2:",getTime.getTime())
var db=require("./../modules/db");
console.log("db:",db)

module.exports.entryAddPost=function(req,res){
	var obj=req.body;
	obj.time=getTime.getTime();
	db.insertOne(res,"goods",obj,function(err,result,db){
		if(err){
			console.log("数据添加失败",err)
		}else{
			console.log("数据添加成功",result);
			res.send(result)
			db.close();
		}
	})
}


module.exports.entryGetDataPost=function(req,res){
	var obj=req.body;
	console.log("entryGetDataPost obj：",obj)
	db.find(res,"goods",obj,function(err,result,db){
		if(err){
			console.log("数据获取失败");
			res.send({error:1})
		}else{
			console.log("数据获取成功",result);
			res.send(result)
			db.close();
		}
	})
}











