	 	var v=new Vue({
	    el:"#app",
	   	data:{
	   		totalMoney:0,
	    	list:[],
	    	flagAll:false,
	    	all:true,
	    	showFlag:false,
	    	delProduct:""
	    },
	    filters:{
	    	formatMoney:function(val){
	    		return '¥'+val.toFixed(2)
	    	}
	    },
	    mounted:function(){
	    	 this.$nextTick(function(){
	    		 this.creatview();
	    	 })
	    },
	    methods:{
	    	creatview:function(){
	    		axios.get("cardata.json").then(dd=>{      //ES6箭头函数，函数体内部的this和外层函数的this是一个指向
	    			 //post怎么请求？
	    			this.list=dd.data.result.list;
	    		})
	    	},
	    	changeNum:function(pro,point_status){
	    		if(point_status<0){
	    			pro.productQuentity--
	    			if(pro.productQuentity<1){
	    				pro.productQuentity=1
	    			}
	    		}else{
	    			pro.productQuentity++
	    		}
	    		this.calcTotalPrice();
	    	},
	    	selectProduct:function(item){
	    		
	    		if(typeof item.checked=='undefined'){
	    			//Vue.set(item,"checked",true)  //全局注册checked
	    			this.$set(item,"checked",true)  //局部注册checked
	    		}else{
	    			item.checked=!item.checked
	    		}
	    		//选中全部之后，让全选按钮也被选中
	    		this.flagAll = true;
	    		this.list.forEach(i=>{
	    			if(!i.checked){
	    				this.flagAll=false
	    			}
	    		})
	    	    this.calcTotalPrice(); //这里也要执行计算
	    	},
	    	checkAll:function(flag){
	    		this.flagAll=flag;
	    		that=this;
	    		this.list.forEach(function(item,index){
	    			if(typeof item.checked=='undefined'){
			    			that.$set(item,"checked",that.flagAll)  //局部注册checked
			    	}else{
			    			item.checked=that.flagAll;
			    	}
	    		})
	    		this.calcTotalPrice();  //加this
	    	},
	    	calcTotalPrice:function(){
	    		var _this=this;
	    		this.totalMoney=0;   //每次计算前都要清0
	    		this.list.forEach(function(item,index){
	    			if(item.checked){
	    				_this.totalMoney +=item.productPrice*item.productQuentity
	    			}
	    		})
	    	},
	    	delConfirm:function(item){
	    		this.showFlag=true;
	    		this.delProduct=item;
	    	},
	    	confirmPro:function(){
	    		var index=this.list.indexOf(this.delProduct);
	    		this.list.splice(index,1);
	    		this.showFlag=false;
	    	},
	    	Checkout:function(){
	    		window.open("address.html")
	    	}
	    }
	})
     //全局过滤器
	Vue.filter("money",function(val,type){  //type是参数
		return val+'\t'+type  //加多个空格??
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
/*$(function(){
	var items=$("#app").find("tbody").find("tr").find("td ins");
	console.log(items);
	for(var i=0;i<items.length;i++){
		$(items[i]).click(function(){
			$(this).toggleClass("choose")
		})
	}
	var sel_all_btn=$("#app").find("tfoot").find('.select-btn'); //全选按钮
	var sel_all=$("#app").find("tfoot").find('.select-all');     //全选
	var cancel_all=$("#app").find("tfoot").find('.cancel-all');  //取消全选
	$(sel_all).click(function(){
		items.addClass("choose")
		$(sel_all_btn).addClass("choose-all")
	})
	$(cancel_all).click(function(){
		items.removeClass("choose")
		$(sel_all_btn).removeClass("choose-all")
	})
})
*/