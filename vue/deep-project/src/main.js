import { createApp } from 'vue'
import App from './App.vue'
import mixin from './Mixin.js'
import store from './store.js'

createApp(App).use(store).mixin(mixin).directive('focus',{
    mounted(el, binding, vnode, prevVNode){
        console.log('mounted', el, binding, vnode, prevVNode)
        if(binding.value){
            el.focus();
        }
    },
    updated(el, binding, vnode, prevVNode){
        console.log('updated', el, binding, vnode, prevVNode)
        if(binding.value){
            el.style.color = "blue";
        }else{
            el.style.color = "red";
        }
    }
}).mount('#app');

