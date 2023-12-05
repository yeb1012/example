<template>
    <Layout>
        <template v-slot:header>
            <h1>팝업제목</h1>
        </template>
        <template v-slot:default>
            <p>팝업내용1</p>
            <p>팝업내용2</p>
        </template>
        <template v-slot:footer>
            <button type="button">닫기</button>
        </template>
    </Layout> <!--slot을 사용할땐 여는태그 닫는 태그 꼭 구별해서 사용 <Layout/>이런식 안됨-->
</template>
<script>
import Layout from './ModalLayout.vue'

export default {
    components : {
        Layout
    }    
}
</script>