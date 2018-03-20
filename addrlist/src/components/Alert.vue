<template>
    <div id="alert" @touchmove.prevent>    <!--防止遮罩层出现后，底下的层还滚动-->
        <div class="alert_cont">
          <div class="alert_title">{{aletTitle}}</div>
          <div class="alert_num"> {{alertnum}}</div>
          <div class="alert_btn">
            <button v-if="confirm" @touchstart="confirm">确认</button>
            <button v-if="cancel" @touchstart="cancel">取消</button>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
#alert{
  height: 100%;
  width:100%;
  font-size: 0.32rem;
  text-align: center;
  background-color: rgba(0,0,0,0.8);
  z-index:50;
  position: fixed;
  top: 0;
  left: 0;
  display:flex;
}
#alert>.alert_cont{
  width: 5rem;
  height: 3rem;
  border-radius: 0.2rem;
  background-color: #fff;
  margin: auto;
  position: relative;
}
#alert .alert_title{
  font-size: 0.48rem;
  border-bottom: 1px solid #ddd;
}
  #alert .alert_num{
    margin-top:0.32rem;
    font-size: 0.6rem;
    letter-spacing: 0.01rem;
  }
  #alert .alert_btn{
    position: absolute;
    bottom: 0.2rem;
    left: 0;
  }
  #alert button{
    width: 1.5rem;
    height: 0.6rem;
    margin-left: 0.6rem;
    border-radius: 0.1rem;
  }
</style>
