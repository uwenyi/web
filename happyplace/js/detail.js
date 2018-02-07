window.onload=function(){
	//var mainpic=document.querySelector(".main-pic dt img");
	var maindl=document.getElementsByClassName("main-pic")[0];
	var maindt=maindl.children[0];
	var mainpic=maindt.children[0];   //大图
	var ddarray=[];
	var minpic_index=0;  //小图的索引,需要一个默认值
	for(var i=0;i<maindl.children.length;i++){
		if(maindl.children[i].tagName=="DD"){
			ddarray.push(maindl.children[i]);
		}
	}
	for(var i=0;i<ddarray.length;i++){
		ddarray[i].onclick=(function(aii){
			 return function(){mainpic.src=ddarray[aii].children[0].src;
				for(var j=0;j<ddarray.length;j++){
					ddarray[j].className="";
				}
				ddarray[aii].className="hover";
				minpic_index=aii; 
				}
		})(i)
		}
		/*ddarray[i].addEventListener("click",function(){
			mainpic.src=this.children[0].src;
				for(var j=0;j<ddarray.length;j++){
					ddarray[j].className="";
				}
				this.className="hover";
				//minpic_index=aii; 
				
		},false)*/
	
	function stopBubble(e){
		e=e||window.event;
		window.event?window.event.cancelBubble=true:e.stopPropagation();
	}
	//jq实现放大镜功能
	var src="";
	$(".main-pic dt").mouseenter(function(){
		$(this).find(".mask").show();
		$(this).find(".bigimg").show();
		//获取主图容器尺寸
		var picW=$(".main-pic dt").width();
		var picH=$(".main-pic dt").height();
		var picL=$(".main-pic dt").offset().left;
		var picT=$(".main-pic dt").offset().top;
		//获取蒙版宽高
		var maskW=$(".main-pic").find(".mask").width();
		var maskH=$(".main-pic").find(".mask").height();
		//获取放大镜宽高
		var bigW=$(".main-pic").find(".bigimg").width();
		var bigW=$(".main-pic").find(".bigimg").height();
		//放大比例
		var scal=bigW/maskW
		$(document).mousemove(function(e){
			var e=e||window.event;
			var x=e.clientX,y=e.clientY;
			//设置蒙版位置
			var maskL=(x-picL)-maskW/2;
			var maskT=(y-picT)-maskH/2;
			if(maskL<0){
				maskL=0;
			}else if(maskL>picW-maskW){
				maskL=picW-maskW;
			}
			if(maskT<0){
				maskT=0;
			}else if(maskT>picH-maskH){
				maskT=picH-maskH;
			}
			$(".main-pic").find(".mask").css({"left":maskL,"top":maskT});
			//设置放大的图片
			src=$(".main-pic dt").children("img").attr("src");
			$(".main-pic").find(".bigimg img").attr("src",src).width(picW*scal).css({"left":-(maskL*scal)+'px',"top":-(maskT*scal)+'px'});
		})
	}).mouseleave(function(){
				$(".main-pic").find(".mask").hide();
				$(".main-pic").find(".bigimg").hide()
	})
	//点击放大
	$(".main-pic dt").click(function(){                                 	
				$("#main-bigpic").fadeIn(200);
				$(".picenter").find("img").attr("src",src);
			})
	//点击X隐藏
	$(".closebtn").click(function(){
		$("#main-bigpic").fadeOut(200);
	})
	//切换按钮
	//获取所有小图
	var all_minpic=[];
	$(".main-pic dd").find("img").each(function(){
		all_minpic.push(this.src);
	})
	var minimg="";
	//前一张按钮
	$(".main-prev").click(function(){
		if(minpic_index>0){
			minpic_index--;
		}else{
			minpic_index=ddarray.length-1;
		}
		minimg=all_minpic[minpic_index];
		$(".picenter").find("img").attr("src",minimg);  
	})
	//后一张按钮
	$(".main-next").click(function(){
		if(minpic_index<ddarray.length-1){
			minpic_index++;
		}else{
			minpic_index=0;
		}
		minimg=all_minpic[minpic_index];
		$(".picenter").find("img").attr("src",minimg);  
	})
}
