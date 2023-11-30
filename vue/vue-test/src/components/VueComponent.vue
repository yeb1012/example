<template>
    <div>
        <label><input type ="text" v-model="msg"></label>
        <p>{{msg}}</p>
    </div>
</template>

<script>
    export default{
        name : 'VueComponent',
        data(){
            return{
                msg:'Vue  '
            }
        }
    }
    //style에 scoped는 그것만 적용하고 싶을때 사용하면 됨
</script>

<style scoped> 
p{
    background-color: rgb(114, 158, 241);
    height: 100px;
}
</style>
