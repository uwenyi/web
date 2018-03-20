<template>
  <div id="list">
    <ul class="list_user" ref="listUser" @touchmove="bMove=true">
      <li v-for="item in lists" >
        <p>{{item.index}}</p>
        <ul>
          <li v-for="user in item.users" @touchstart="showTel(user.tel)">
            {{user.name}}
          </li>
        </ul>
      </li>
    </ul>
    <ul class="list_index" ref="listIndex">
      <li v-for="items in userIndex" @touchend="setScroll">{{items}}</li>
    </ul>
  </div>
</template>

<script>
    import mask from "./Alert.js";
    export default {
      name: "my-list",
      data(){
        return{
          bMove:false
        }
      },
      mounted:function(){
        this.$nextTick(function(){
          this.setListIndexPos()
        })
      },
      props:['lists'],
      methods:{
        filterIndex:function(data){
          var result = [];
          for(var i=0 ;i<data.length;i++){
            if(data[i].index){
              result.push(data[i].index)
            }
          }
          return result
        },
        setListIndexPos:function(){
            var h=this.$refs.listIndex.offsetHeight;
            this.$refs.listIndex.style.marginTop= - h/2 +'px';
            console.log(this.$refs.listIndex.offsetHeight)
        },
        setScroll:function(e){
          var e = e|| window.event;
          var iWord = e.target.innerHTML;
          var ap = this.$refs.listUser.getElementsByTagName('p');
          for (var i=0;i<ap.length;i++){
            if(ap[i].innerHTML==iWord){
                document.documentElement.scrollTop=ap[i].offsetTop;
                document.body.scrollTop=ap[i].offsetTop;
            }
          }
        },
        showTel:function(tel){
          if(!this.bMove){
            mask({
              title:"呼叫",
              content:tel,
              confirm:function(){
                alert("确定")
              },
              cancel:function(){
                document.body.removeChild(document.getElementById('alert'))
              }
            })
          }else{
            this.bMove=false
          }

        }
      },
      computed:{
        userIndex : function(){
          return this.filterIndex(this.lists)
        }
      },

    }
</script>

<style scoped>
  #list{position: relative;margin-top: 0.8rem;}
  ul{font-size:0.32rem}
  .list_user p{height: 0.36rem;line-height:0.36rem;background-color: #eee;padding-left: 0.24rem}
  .list_user li ul{padding-left: 0.24rem}
  .list_user li ul li{height: 0.6rem;border-bottom: #ddd 1px solid;line-height: 0.6rem;font-size: 0.36rem}
  .list_user li ul li:last-child{border-bottom: 0px}
  .list_index{position: fixed;right: 0.24rem;top: 50%;text-align: center;font-size: 0.24rem}
  .list_index li{background: #eee;width: 0.32rem;border-radius: 0.32rem;margin-bottom: 0.1rem}
  .list_index li:last-child{margin: 0px}
</style>
