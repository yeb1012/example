<template>
    <div>
        <h3>{{ title }}</h3> <!--script에 setup에 선언된거 쓰지 않으면 오류남 그래서 타이틀을 굳이 적어준거임-->
        <p>저자 : {{ author.name }}</p>
        <template v-if ="isWrited" >
        <p :key="idx" v-for="(info,idx) in author.books">{{ info }}</p>
        </template>
        <p v-else> 아직 출간된 책이 없습니다</p>
        <button @click = "plusBookInfo">정보 업데이트</button>
    </div>
</template>
<script setup >
//setup을 해줌으로 export가 명시적으로 빠짐
import {reactive, ref, computed, watch} from 'vue'
//data 옵션: reactive, ref
//computed 옵션: computed
//wath 옵션: watch
//mehtods 옵션 : 없음 그냥 함수로 선언하면 됨
const author = reactive({ //reactive는 객체나 배열타입만 선언 가능, 기본타입은 사용할수 없다
    name: 'John Doe',
    books :[
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})

const title = ref('제목을 입력해주세요'); //기본타입을 사용할땐 ref로 하라 title.value

const isWrited = computed(()=>{ //콜백함수로 넘겨주기
    return author.books.length > 0? true:false;
});

watch(author.books, (info)=>{
        console.log(info[info.length -1]);
    }
)//첫번째가 감시하고자 하는 대상, 두번째는 콜백

const plusBookInfo = ()=>{
    let info = 'Node.js - Javascript Runtime';
    author.books.push(info);
}
</script>