<template>
  <div id="app">
    <my-header al-title="通讯录" al-fixed>
      <button slot="leftbtn" @touchstart="backBtn">返回</button>
      <button slot="rightbtn" @touchstart="confirmBtn">确定</button>
    </my-header>
    <my-list :lists="tlist"></my-list>
  </div>
</template>

<script>
    export default {
        name: "index",
        data(){
          return{
           tlist:[]
          }
        },
     mounted:function(){
        this.$nextTick(function(){
          this.creatview();
        })
      },
      methods:{
          backBtn:function(){
            alert("返回")
          },
          confirmBtn:function(){
            alert("确定")
          },
          creatview:function(){
          this.$ajax.get("http://localhost:8080/static/data.json").then(dd=>{
            this.tlist=dd.data.userData;
          })
        }
      }
    }
</script>

<style scoped>
  @import "../assets/common.css";
  h1{font-size: 0.5rem}
</style>
