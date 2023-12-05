<template>
    
    <table>
        <tr>
        {{ $dateFormat('2023-12.05', 'yyyy/MM/dd') }}
        </tr>
        <tr>
            <th>제목</th>
            <td>{{ title }}</td>
            <th>조회수</th>
            <td>{{ readInfo }}</td>
       </tr>
       <tr>
            <th>작성자</th>
            <td>{{ writer }}</td>
            <th>작성일자</th>
            <td>{{ regdate }}</td>
        </tr>
        <tr>
            <th>내용</th>
            <td>{{ content }}</td>
        </tr>
        <tr>
            <button @click="updateInfo">+1</button>
        </tr>
    </table>
</template>
<script>
// import AppMxin from '../Mixin.js'
export default {
   // props : ['title', 'count', 'writer', 'regdate', 'content']
   // mixins :[AppMxin],
   props : {
    title : String, //타입만 줄 경우 타입안쓰고 바로 가능
    count : {
        type: Number,
        default :0
    },
    writer:{
        type: [String, Object], //타입이 두개 이상 가능한 경우 배열로 정의
        default:function(){
            return {first : 'Adward', second : 'Ian'}
        } //Object랑 array는 함수 리턴타입이 객체형식{}
    },
    regdate:{
        required : true,
        validator : function(value){
            let format =/[0-9][0-9][0-9][0-9]\/\[0-9][0-9]\/\[0-9][0-9]/
            return !(value.match(format) ==null);
        }//validator는 값을 매개변수로 넘겨받음
    },
    content : String

   },
   computed :{
    readInfo(){
        return this.count + 1;
    }
   },
   methods : {
    updateInfo(){
        //이벤트 전달할때 주로 사용
        this.$emit('update-info', this.readInfo);
    }
   },
//    watch: {
//     readInfo(){
        //데이터전달할때 주로 사용
//         this.$emit('update-info');
//     }
//    } 특정한 프로퍼티 값 변화를 감지해서 실시간으로 emit을 통해 부모에게 업데이트

}
</script>