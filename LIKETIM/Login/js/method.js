//拖拽
function Drag(id){
		this.disX=0;
		this.disY=0;
		this.elem=document.getElementById(id);
	
	}
	Drag.prototype.init=function(){
		var This = this;
		this.elem.onmousedown=function(ev){
			This.fnDown(ev);
			document.onmousemove=function(ev){
				This.fnMove(ev)
			};
			document.onmouseup=function(){
				This.fnUp();
			};
		}
	};
	Drag.prototype.fnDown=function(ev){
		this.disX=ev.pageX - this.elem.offsetLeft;
		this.disY=ev.pageY - this.elem.offsetTop;
		
	};
	Drag.prototype.fnMove=function(ev){
		this.elem.style.margin=0; 
		var emleft=ev.pageX - this.disX;
		var emtop=ev.pageY - this.disY;
		var maxW=document.documentElement.clientWidth-this.elem.offsetWidth;
		var maxH=document.documentElement.clientHeight-this.elem.offsetHeight;
		if (emleft<0) {
			emleft=0
		}else if(emleft>maxW){
			emleft=maxW
		}
		if(emtop<0){
			emtop=0
		}else if(emtop>maxH){
			emtop=maxH
		}
		this.elem.style.left=emleft + 'px'
		this.elem.style.top=emtop + 'px';
	};
	Drag.prototype.fnUp = function(){
		document.onmousemove=null;
		document.onmouseup=null;
	}
	

//关闭按钮
function Close(cls){
		this.ele=document.getElementsByClassName(cls)[0];		
		this.resultFather=null;
		that=this;
		that.ele.onclick=function(){
			while (that.ele.tagName != 'BODY'){
				that.resultFather=that.ele;
				that.ele=that.ele.parentNode;
			}
			document.body.removeChild(that.resultFather)
		}
	}	
	
		
