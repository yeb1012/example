<template>
    <div>
    <button type="button" v-on:click="like,chheart"> ♡ </button>
    <input v-model.number="num">
    <button type="button" @click="setCount(num,$event),msg(num)">  + {{ num }} </button>
    <p>The Counter is : {{"♡" + counter }}</p>
    <hr>
    <form @click.self="msg('form')">
        Form
        <div @click="msg('div')">
            Div
            <p @click.stop.prevent="msg('p')">
               p <a @click.prevent="msg('a')" href="http://www.naver.com">네이버</a> 
            </p>
        </div>
    </form>
    
    
    </div>
</template>
<script>

export default{
    data(){
        return{
            counter :0
        }
    },
    methods : {
        like(e){
            console.log(e);
            this.counter++;
        },
        setCount(value, event){ //e가 자동으로 넘어오지 않고 value로 매개변수 넘겨줌
            console.log('setCount', event)
            this.counter = this.counter + value;
        },
        msg(msg){
            alert(`${msg} 선택!!!`)
        }

    },
    // computed : {    
    //         chheart(){
    //             return 
    //         }

    // }
}
</script>
<style scoped>
form, form *{
    border:1px solid burlywood;
    margin: 10px;
    
}
</style>
