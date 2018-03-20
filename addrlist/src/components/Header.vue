<template>
    <header :style="{'position':alFixed?'fixed':'absolute'}">
      <slot name="leftbtn"></slot>
      {{alTitle}}
      <slot name="rightbtn"></slot>
    </header>
</template>

<script>
    export default {
        name: "my-header",
        data(){
          return{

          }
        },
        props:{
          'alTitle':{
            type:String,
            default:'标题'
          },
         'alFixed':{
            type:Boolean,
            default:false
          }
        }
    }
</script>

<style scoped>
  header{background: #ffc332;
    height: 0.8rem;
    text-align: center;
    font-size: 0.32rem;
    line-height: 0.8rem;
    top:0px;left: 0px;
    width: 100%;
    color: white;
    z-index: 10
  }
  header button{height: 0.8rem;
    width: 1rem;
    background-color: transparent;
    font-size: 0.32rem;
    color: white
  }
  header button:nth-of-type(1){
    position: absolute;
    top:0px;
    left: 0px
  }
  header button:nth-of-type(2){
    position: absolute;
    top:0px;
    right: 0px
  }
</style>
