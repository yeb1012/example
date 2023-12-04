<template>
  <div>
    <Header/> <!--컴포넌트로 불러오는 하나의 임의 태그 header.veu의 헤더부분이 여기로 다 들어옴-->
  <router-view/>
</div>
</template>
<script>
import Header from './layouts/header.vue'
export default{
  components : {
    Header //객체형태로 그냥 이렇게 등록
  }
}
</script>



