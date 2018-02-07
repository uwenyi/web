window.onload=function(){
	 var drag = new Drag('container');
	 drag.init();
	var close=new Close('close');  //关闭按钮
	var cstatus=document.getElementsByClassName('current-status')[0],
		statusul=document.getElementsByClassName('status-item')[0],
		lis=statusul.getElementsByTagName('li');
	cstatus.onclick=function(e){
		var e=e || window.event;
		e.stopPropagation();
		statusul.style.display='block'
	}
	for (i=0;i<lis.length;i++){
		lis[i].onclick=function(){
			var lid=this.id;
			var lititle=this.getElementsByTagName('span')[1].innerHTML;
			cstatus.className=''
			cstatus.className='current-status ' +lid;
			cstatus.title='在线状态：'+lititle;
			statusul.style.display='none'
		}
	}
	document.onclick=function(){
		statusul.style.display='none'
	}
	
	var chiose=document.getElementsByClassName('chiose')[0];
	var icons=chiose.getElementsByTagName('i');
	
	for(var i=0;i<icons.length;i++){
		icons[i].onclick=function(){
			if(this.className){
				this.className=''
			}else{
				this.className='selected'	
			}
		}
	}
}