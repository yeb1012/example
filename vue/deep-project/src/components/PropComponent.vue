<template>
    <div>
     <PageTitle title="Hello, world!"/> <!--page-title과 차이가 있음--> <!--:title='Hello, world!'-->
     <!-- <PageContent :title = "header" 
                   v-bind:count="10"
                  :writer = "['Adward']"
                  :regdate="'2023-12-05'"
                  :content="{first : 'Node.js', second : 'Vue.js'}" /> -->
    <PageContent v-bind="info" @update-info="handler"/>          <!--info는 객체타입 인포 하위가 필드로 정의되 있어야 사용 가능-->   
    <RefComponent ref="child" />
    <button @click = "childHandler">자식제어</button>
   
   </div>
</template>

<script>
//PropsComponent.vue
import PageTitle from './PageTitle.vue';
import PageContent from './PageContent.vue';
import RefComponent from './RefComponent.vue';


export default {
    data(){
        return {
            header: '',
            info :{
                title : "Today is",
                count : 100,
                writer : "Adward",
                regdate : '2023/12/05',
                content : '내용 없음'
            }
        }
    },
    components : {
        PageTitle,
        PageContent,
        RefComponent
        

    },
    methods : {
        handler(value){
            alert(value);
        },
        childHandler(){
            //this.$refs.child.content = '부모가 보내는 데이터';
            //this.$refs.child.plusCount();
            this.$refs.child.$refs.cBtn.click();
        }
    }
}
</script>