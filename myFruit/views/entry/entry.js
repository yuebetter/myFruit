//立即执行函数
$(function(){
	tableShow()
	//获取数据
	getData({})
	//点击添加
	$("#addPost").click(function(){
		var goodsnameV=$("#goodsName").val();
		var priceV=$("#price").val();
		//判断
		if(goodsnameV&&priceV){
			var imgV=$("#img").val();
			var typeV=$("option:selected").val()
			
			var obj={
				img:imgV,
				name:goodsnameV,
				price:priceV,
				type:typeV
			}
			
			var myUrl="/addPost";
			$.post(myUrl,obj,function(data){
				console.log("data:",data)
				
			})
		}else{
			$("#prompt").html("数据有误")
		}
	})
})

//获取数据
function getData(){
	var myUrl="/getDataPost";
	$.ajax({
		url:myUrl,
		type:"post",
		timeout:0,
		beforeSend:function(){
			$("#loading").show()
		},
		success:function(data){
			if(data.length>0){
				show(data)
			}
		},
		error:function(){
			$("#prompt").html("获取数据失败")
		},
		complete:function(){
			$("#loadimg").hide();
		}
	})
}

//渲染页面
function show(arr){
	var trtd="";
	for (var i = 0; i < arr.length; i++) {
		trtd+=`
			<tr>
				<td><img src="img/bx1.jpg"/></td>
				<td>${arr[i].name}</td>
				<td>${arr[i].price}</td>
				<td>${arr[i].name}</td>
				<td>
					<a onclick=delData()>删除</a>
					<a onclick=upd()>修改</a>
				</td>
				</tr>
		`;
	}
}



























function tableShow(){
	var trs=$("table#tab tr");
	//console.log(trs);
	//如果行数的数量小于等于1的时候，表头隐藏
	if(trs.length<=1){
		$("table#tab").hide();
	}else{
		//大于1的时候，就展示出来
		$("table#tab").show();
	}
}





















