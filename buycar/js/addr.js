new Vue({
	el:"#app",
	data:{
		addrItem:[],
		cardId:0,
		initLength:3,
		sel:1,
		limitNum:4,
		clickme:false,
		moreFlag:true
	},
	mounted:function(){
		this.$nextTick(function(){
			this.creatShow()
		})
	},
	methods:{
		/*creatShow:function(){
			axios.get("address.json").then(res=>{
				this.addrItem=res.data.result;
			})
		},*/
		creatShow:function(){
			axios.request("address.json",{
				method: 'get'
			}).then(res=>{
				this.addrItem=res.data.result;
			})
		},
		loadMore:function(){
			if(this.moreFlag){
				this.moreFlag=false;
				return this.limitNum=this.addrItem.length;
			}else{
				this.moreFlag=true;
				return this.limitNum=4;
			}
		},
		defaultCard:function(addrId){
			this.addrItem.forEach(function(item,index){
				if(item.addressId==addrId){
					item.isDefault=true;
				}else{
					item.isDefault=false;
				}
			})
			/*axios.get("address.json",{
				params:{
					iskey:addrId    //iskey是和后台约定的关键字
				}
			}).then(res=>{
				
			})*/
		}
	},
	computed:{
		filterAddress:function(){
			return this.addrItem.slice(0,this.limitNum);
		}
	}
})
