/*
 * 定义公共组件js
 * Author by jiangshengxiang @2017.08.25
 *//* 	Author by yangguowen @2017.10.26 * */
//自适应(function(doc, win) {	var docEle = doc.documentElement;	var fn = function() {		var width = docEle.clientWidth;		if (width <= 960) {
			docEle.style.fontSize = 50 * (width / 360) + "px";
		}	};	win.addEventListener("resize", fn, false);	doc.addEventListener("DOMContentLoaded", fn, false);	win.addEventListener("pageshow", function(e) {		if(e.persisted) {			fn();		}	}, false);}(document, window));
//初始化
$(function(){	/* 	Author by yangguowen @2017.10.26 		添加meta标签 * */	$('head').prepend('<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />');
    //给表单选择下拉框列表项添加title
    $(".jsx-formSelect em").each(function(){
        $(this).attr("title",$(this).text());
    })
    $(".jsx-formSelectBox").children().each(function(){
        $(this).attr("title",$(this).text());
    })
    //给弹窗中相应元素添加onclick事件
    $(".jsx-winpop .jsx-formSelect").attr("onclick","openFormSelect(this);");
    $(".jsx-winpop .jsx-formSelectBox").children().attr("onclick","selectFormSelectBox(this);");
    $(".jsx-winpop .jsx-FormRadio").children("label").attr("onclick","radioForm(this);");
}) 

/*
 * 给当前页面头部导航添加id和class
*/
var navindex = $("html").attr("data-id");
$(".jsx-header nav > li").eq(navindex).attr({"class":"jsx-active","id":"jsx-active"});

/*
 * 头部导航交互效果
*/
$(".jsx-header nav > li").on({
    mouseover:function(){
                  $(this).addClass("jsx-active").siblings().removeClass("jsx-active");
              },
    mouseout:function(){
                  $(this).removeClass("jsx-active");
                  if ($(".jsx-header nav > li").hasClass("jsx-active")==false) $(".jsx-header nav > li#jsx-active").addClass("jsx-active");
              }
})

/*
 * 打开搜索输入框
*/
$(".jsx-search .searchicon").on("click",function(){
	$(this).prev(".searchinput").toggleClass("jsx-active");
})

/*
 * 按回车键完成搜索，通过url将值传递到搜索结果页
*/
$("body").keydown(function() {
	  var iptval = $(".searchinput input").val();
    var datahref = [];
    datahref.push(iptval);
    if (event.keyCode == "13") {
    	$(".searchinput").removeClass("jsx-active");
    	window.location.href = "search_result.html?data=" + datahref;
    	$(".searchinput input").val('');
    }
});
  
/*
 * 轮播图图片的高、文字垂直位置
*/
function bannerHeigt(type){
    var winWidth = $(window).width();
    var perNum;//图片高与宽的比例
    if (type == "1") {
        perNum = 0.424375;
    } 
    if (type == "2") {
        perNum = 0.3;
    } 
    $(".jsx-indexbanner,.jsx-indexbanner li img").height(winWidth * perNum);
    $(".banner-text").each(function(){
        $(this).css("margin-top",$(this).outerHeight()/4*(-1) + "px");
    })
}  

/*
 * tab选项卡
*/
$(".jsx-tabMenu").click(function(){
   var _thisindex = $(this).index();
   $(this).addClass("jsx-active").siblings().removeClass("jsx-active");
   $(this).parent().next(".jsx-tabContent").children().eq(_thisindex).fadeIn().siblings().hide();
})

/*
 * 打开、收起下拉框
*/
//弹窗中
function openFormSelect(t){
   $(t).toggleClass("jsx-active");
   $(t).next(".jsx-formSelectBox").toggleClass("jsx-active");
   $(t).closest("li").siblings().find(".jsx-formSelect,.jsx-formSelectBox").removeClass("jsx-active");
   $(t).parent().siblings(".formitem-cont").find(".jsx-formSelect,.jsx-formSelectBox").removeClass("jsx-active");// $(t).closest(".bomb-content").scrollTop($(".bomb-content")[0].scrollHeight);
}
//非弹窗中
$(".jsx-formSelect").click(function(){
   $(this).toggleClass("jsx-active");
   $(this).parent().siblings().find(".jsx-formSelect,.jsx-formSelectBox").removeClass("jsx-active");
   $(this).next(".jsx-formSelectBox").toggleClass("jsx-active");
})

/*
 * 选择下拉列表内容
*/
//弹窗中
function selectFormSelectBox(t){
   var _thisval = $(t).text();
   var _pant = $(t).parent();
       _pant.prev(".jsx-formSelect").removeClass("jsx-active").find("em").attr("title",_thisval).html(_thisval);
       _pant.removeClass("jsx-active");
       $(t).addClass("selected").siblings().removeClass("selected");

}
//非弹窗中
$(".jsx-formSelectBox").children().on("click",function(){
   var _thisval = $(this).text();
   var _pant = $(this).parent();
   _pant.prev(".jsx-formSelect").removeClass("jsx-active").find("em").attr("title",_thisval).html(_thisval);
   _pant.removeClass("jsx-active");
   $(this).addClass("selected").siblings().removeClass("selected");
})

/*
 * 垂直居中
*/
function verticalCentering(){
   $(".jsx-ThisCentering").each(function(){
       var _thisheight = $(this).height();
       var _targetheight = $(this).siblings(".jsx-TargetCentering").height();
       $(this).css({"padding-top":(_targetheight - _thisheight)/2 + "px","padding-bottom":(_targetheight - _thisheight)/2 + "px"});
   })
}

/*
 * 弹窗高度和在屏幕的垂直位置
*/
function BombBoxHeight(){
   var x = 0.82524513;//宽高比系数
   var bomb = $(".bomb-wrapbox");

   bomb.height(bomb.width()*x);
   bomb.css({"margin-top":bomb.height()/2*(-1) + "px","margin-left":bomb.width()/2*(-1) + "px"});
   $(".bomb-content").outerHeight(bomb.height() - $(".bomb-head").outerHeight() - $(".bomb-main .bomb-btn").outerHeight());
   $(".bomb-articlemain").outerHeight(bomb.height() - $(".bomb-head").outerHeight() - $(".bomb-main .bomb-articletitle").outerHeight());
}

/*
 * 创建弹窗
*/
function CreatBombBox(type,title,cnt){
   var bombhtml;
   var bombclass;
   //弹窗的尺寸，1为默认大小，2为大弹窗,3为小弹窗
   if (type == "1") {
      bombclass = '';
   }
   if (type == "2") {
      bombclass = ' largersize';
   }
   if (type == "3") {
      bombclass = ' smallsize';
   }
  if (!$("body").children().is(".jsx-bombbox")) {
      bombhtml = '<section class="jsx-bombbox">'
           +        '<div class="bomb-mask" onclick="CloseBombBox();"></div>'
           +        '<div class="bomb-wrapbox' + bombclass + '">'
           +           '<div class="bomb-close fa fa-close fa-2x" onclick="CloseBombBox();"></div>'
           +           '<div class="bomb-head">' + title + '</div>'
           +           '<div class="bomb-main">' + cnt + '</div>'
           +        '</div>'
           +     '</section>';
      $("body").append(bombhtml);
      $(".jsx-bombbox").fadeIn();
  }else{       
        bombhtml = '<div class="bomb-wrapbox' + bombclass + '">'
                 +     '<div class="bomb-close fa fa-close fa-2x" onclick="CloseBombBox();"></div>'
                 +     '<div class="bomb-head">' + title + '</div>'
                 +     '<div class="bomb-main">' + cnt + '</div>'
                 + '</div>'
        $(".jsx-bombbox").append(bombhtml);
        $(".jsx-bombbox").fadeIn();
  }   
  BombBoxHeight();
}
//创建默认尺寸弹窗
$(".jsx-BombBox").click(function(){
    var _thisid = $(this).attr("data-id");
    var combhead = $(this).attr("data-title");  
    var combcont = $("#" + _thisid).html();
    CreatBombBox(1, combhead, combcont);
    $("html,body").css("overflow","hidden");
})
//创建大尺寸弹窗
$(".jsx-BombBox-lg").click(function(){
    var _thisid = $(this).attr("data-id");
    var combhead = $(this).attr("data-title");  
    var combcont = $("#" + _thisid).html();
    CreatBombBox(2, combhead, combcont);
    $("html,body").css("overflow","hidden");
})
//创建小尺寸弹窗
$(".jsx-BombBox-sm").click(function(){
    var _thisid = $(this).attr("data-id");
    var combhead = $(this).attr("data-title");  
    var combcont = $("#" + _thisid).html();
    CreatBombBox(3, combhead, combcont);
    $("html,body").css("overflow","hidden");
})

/*
 * 关闭弹窗
*/
function CloseBombBox(){
    $(".jsx-bombbox").fadeOut();
    $(".bomb-wrapbox").remove();
//  $("html,body").removeAttr("style");	$("html,body").css("overflow-y","auto");
}

/*
 * 表单单选
*/
function radioForm(t){
   $(t).children(".fa").attr("class","fa fa-circle-o jsx-active");
   $(t).children("input[type='radio']").attr("checked","checked");
   $(t).siblings("label").children(".fa").attr("class","fa fa-circle-thin");
   $(t).siblings("label").children("input[type='radio']").removeAttr("checked");
}

/*
 * 滚屏事件
*/
$(window).scroll(function(){
    var scrollheight=$(document).scrollTop(),
        screenheight=$(window).height(),
        wrapheight=$(document.body).height();
    //导航菜单样式
    if (scrollheight/(wrapheight-screenheight)>=0.08) {
        $(".jsx-header").addClass("activing");
    }else{
        $(".jsx-header").removeClass("activing");
    }
    //返回顶部
    if(scrollheight/(wrapheight-screenheight)>=0.2){
        $(".jsx-BackTotop").fadeIn();
     }else{
        $(".jsx-BackTotop").fadeOut();
     }
});

/*
 * 返回顶部
*/
$(".jsx-BackTotop").click(function(){
    $('html,body').animate({scrollTop: '0px'}, 500);
});

/*
 * 关闭在线留言漂浮框
*/
$(".jsx-CloseCommentsBox").click(function(){
    $(this).parent().remove();
})