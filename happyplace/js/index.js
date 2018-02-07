define(["jquery"],function($){
	$(function(){
	//轮播图
	$.ajax({
		type:"get",
		url:"json/indexdata.json",
		async:false,
		success:function(data){
			var specialhtml="";
			for(var i=0;i<data.special.length;i++){
				specialhtml+="<a target='_blank' href="+data.special[i].links+">"+
				"<dl>"+
					"<dt>"+
						"<img src="+data.special[i].pic+"/>"+
					"</dt>"+
					"<dd>"+
						"<span class='bracket'>"+data.special[i].theme+"</span>"+
						"<span>"+data.special[i].content+"</span>"+
					"</dd>"+
				"</dl>"+
				"</a>"
			}
			$(".choicePic").append(specialhtml);
			//最新尖货
			var newhtml="";
			for(var i=0;i<data.newproduct.length;i++){
				newhtml+="<dl>"+
						"<ins class='hot'><img src='"+data.newproduct[i].mark+"'/></ins>"+
						"<dt>"+
							"<a href='"+data.newproduct[i].prolink+"'><img src='"+data.newproduct[i].proImg+"'/></a>"+
						"</dt>"+
						"<dd>"+
							"<p>"+data.newproduct[i].describe+"</p>"+
						"</dd>"+
						"<dd>"+
							"<a class='deti' title='"+data.newproduct[i].deti+"' href='"+data.newproduct[i].wordlink+"'>"+data.newproduct[i].deti+"</a>"+
						"</dd>"+
						"<dd>"+
							"<var class='money'>"+data.newproduct[i].price+"</var>"+
						"</dd>"+
						"<dd>"+
							"<i><img src='"+data.newproduct[i].flag+"'/></i><a>"+data.newproduct[i].from+"</a>"+
						"</dd>"+
					"</dl>"
			}
			$(".product-list").eq(0).append(newhtml);
			//意大利咖啡
			var coffeetml="";
			for(var i=0;i<data.coffee.length;i++){
				coffeetml+="<dl>"+
						"<ins class='hot'><img src='"+data.coffee[i].mark+"'/></ins>"+
						"<dt>"+
							"<a href='"+data.coffee[i].prolink+"'><img src='"+data.coffee[i].proImg+"'/></a>"+
						"</dt>"+
						"<dd>"+
							"<p>"+data.coffee[i].describe+"</p>"+
						"</dd>"+
						"<dd>"+
							"<a class='deti' title='"+data.coffee[i].deti+"' href='"+data.coffee[i].wordlink+"'>"+data.coffee[i].deti+"</a>"+
						"</dd>"+
						"<dd>"+
							"<var class='money'>"+data.coffee[i].price+"</var>"+
						"</dd>"+
						"<dd>"+
							"<i><img src='"+data.coffee[i].flag+"'/></i><a>"+data.coffee[i].from+"</a>"+
						"</dd>"+
					"</dl>"
			}
			$(".product-list").eq(1).append(coffeetml);
		}
	});
	//国家分类
		for(var i=0;i<17;i++){
			$(".countrys").append($(".state").eq(0).clone());
		}
		//轮播图
		var mySwiper = new Swiper('.swiper-container', {
			autoplay: 2000,
			pagination : '.swiper-pagination',
			paginationType : 'bullets',
			effect : 'fade',
			prevButton:'.swiper-button-prev',
			nextButton:'.swiper-button-next',
		})
	})
})
