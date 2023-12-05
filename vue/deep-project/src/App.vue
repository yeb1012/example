<template>
  <div>
   <input type="text" v-model.lazy="selected" v-focus="isFocused"/>
   <component v-bind:is = "selected"></component> <!--is속성으로 내가 뭘 출력하려하는지 이름 알려주기--><!--동적-->
 </div>
</template>

<script>

import PropsCom from './components/PropComponent.vue';
import SlotCom from './components/TextModal.vue'; 
import Composition from './components/compositionInterface.vue'
import Store from './components/StoreComponent.vue'


export default {
  name : 'app',
  data(){
    return{
      selected : "PropsCom",
      isFocused : false
    }
  },
  components : {
    PropsCom, //'PropsCom':{}
    SlotCom,
    Composition,
    Store
  }
  
}
</script>

