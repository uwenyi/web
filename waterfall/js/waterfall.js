$(document).ready(function(){   //resize当窗口大小发生变化的时候
	$(window).resize(function(){
		waterFall();
	})
	var page=1;
	var nmb=15;
	$.getJSON("data.json",function(canshu){   //参数，名字随便取
				$.each(canshu.date,function(index,value){
					if(index<nmb*page&&index>=(page-1)*nmb){
						var spaceBox=$("<div>").addClass("spacebox").appendTo($("#main"));
						var imgBox=$("<div>").addClass("imgbox").appendTo($(spaceBox));
						$("<img>").attr("src","img/"+$(value).attr("src")).appendTo($(imgBox));
					}
				})	
				page++;
				$("img").load(function(){  //图片加载完才执行瀑布流
					waterFall();
				})
		})
	//var dateInt={date:[{"src":"11.jpg"},{"src":"12.jpg"},{"src":"25.jpg"},{"src":"27.jpg"},{"src":"15.jpg"}]} 
	$(window).scroll(function(){
		if(loadCondition()){  //记得给函数加()，否则只会获取函数里所有的内容，而不是返回值
			$.getJSON("data.json",function(data){	  //data.json是文件名，里面的data都是形参
				$.each(data.date,function(index,value){
					if(index<nmb*page&&index>=(page-1)*nmb){
						var spaceBox=$("<div>").addClass("spacebox").appendTo($("#main"));
						var imgBox=$("<div>").addClass("imgbox").appendTo(spaceBox);
						$("<img>").attr("src","img/"+$(value).attr("src")).appendTo(imgBox);
					}
				})	
				$("img").load(function(){
					waterFall();
				})
				page++;
			})
		}
	})
	
});
function waterFall(){
	var Alldiv=$("#main>div")  //获取放置图片的最外层div
	var Owidth=Alldiv.eq(0).outerWidth();  //获取一个div的宽度
	//console.log(Owidth);
	var cols=Math.floor($(window).width()/Owidth);    //窗口能容纳图片的列数
	$("#main").width(Owidth*cols).css("margin","0 auto"); //根据窗口宽度设置行数
	var hArr=[];  //新建一个空数组
	Alldiv.each(function(index,element){
		var h=$(this).outerHeight();
		if(index<cols){
			hArr[index]=h;
			$(this).removeAttr("style");
		}else{
			var minH=Math.min.apply(null,hArr);   //获取数组中最小数值
			var minIndex=$.inArray(minH,hArr);    //获取minH在hArr数组中的索引
			$(element).css({
				"position":"absolute",
				"top":minH+"px",
				"left":minIndex*Owidth+"px"
			})
			hArr[minIndex]+=Alldiv.eq(index).outerHeight();   
		}
	})
}
function loadCondition(){
	var lastDiv=$("#main>div").last();   //获取最后一个div
	var lastSpace=lastDiv.offset().top+Math.floor(lastDiv.outerHeight()/2);   //最后一个div距离顶部的高度+自身高度的一半
	var scrollT=$(window).scrollTop();
	var winH=$(window).height();
	return(lastSpace<scrollT+winH);   //如果最后一个div距离顶部的高度+自身高度的一半小于窗口加滚出去的高度，返回true，否则返回false
	
}

