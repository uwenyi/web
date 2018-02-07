define(["jquery"],function($){
	$(function(){
	//导航栏二级菜单
	$(".nav li").on({
		mouseenter:function(){$(this).find(".downlist").show();
		setTimeout(function(){
			$(this).find(".downlist").addClass("animat")
		}.bind(this),0)
		},
		mouseleave:function(){
			$(this).find(".downlist").removeClass("animat");
			setTimeout(function(){
				$(this).find(".downlist").hide();
			}.bind(this),300)
		}
	})
	//搜索提示框
	$(".search-content").focus(function(){
		$("#search-suggest").fadeIn(200)
	}).blur(function(){
		$("#search-suggest").fadeOut(200)
	})
	//回到顶部定位
	$(window).scroll(function(){
		var graybtm=$(".ft-main").offset().top;
		var wH=$(window).height();
		var sT=$(document).scrollTop();
		if(sT>graybtm-wH){
			$(".fixedbox").css("bottom",sT-(graybtm-wH)+40+"px")
		}
	})
	//回到顶部
	$(".toparrow").click(function(e){
		e.preventDefault();
		var dtop=$(document).scrollTop();
		var t=setInterval(function(){
			dtop=dtop*0.9;
			$(document).scrollTop(dtop);
			console.log(dtop);
			if(dtop<=1){
				clearInterval(t);
			}
		},20)
	})
})
})
