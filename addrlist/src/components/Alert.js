import Vue from 'vue'
import Alert from './Alert.vue'
var mask=(function(){
  var defaults={
    title:"标题",
    content:"",
    confirm:null,
    cancel:null
  }
  var MyComponent = Vue.extend(Alert);
  return function(opts){
    for(var attr in opts){
      defaults[attr] = opts[attr]
    };
    var vm = new MyComponent({
      el:document.createElement('div'),
      data:{
        aletTitle:defaults.title,
        alertnum:defaults.content,
        confirm:defaults.confirm,
        cancel:defaults.cancel
      }
    });
    document.body.appendChild(vm.$el)
  }
})()
export default mask;
