<template>
<div>
</div>
</template>

<script>

export default{
    components : [], //import해놔도 여기 등록해놓아야 쓸수있음 자식컴포넌트가 적힘 여러 컴포넌트가 쓰이므로 배열로 처리
    data(){
        return{
            today : new Date()
        }
    },
    computed : { AfterYear(){
        return this.today.setFullYear(this.today.getFullYear()+1); //computed에거는 연산의 결과를 읽는것만 가능함 //computed의 값을 변경하려면 data의 today를 변경해야지만 가능하다
    }}, //property :원래는 data안에 한번더 들어가지만 바로 접근이 가능해서 밖에다가 써줌
    methods : {
        test(){
            console.log(this.$data, this.testData)//data는 달러 속성을 이용해서 접근해야
        }
    },//property
    watch : {},//property computed와 유사하게 동작하는데 성격이 매우다름 property를 내부에 저장하고 바뀌면 같이 바뀜 watch는 프로세스임 내가해야할 동작들을 저장 (compted는 결과를 반환하는 반면)
    created(){},
    mounted(){}
}
</script>
<style>
</style>