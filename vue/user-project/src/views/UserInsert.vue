<template>
    <div class ="container">
        <div class = "row">
            <table class = "table">
                <tr>
                    <th class=" text-right table-primary">ID</th>
                    <td class="text-center ">
                        <input type="text" v-model = "userInfo.user_id">
                        <label><button @click="checkId">중복확인</button></label>
                    </td>
                </tr>
                <tr>
                    <th class=" text-right table-primary">PassWord</th>
                    <td class="text-center ">
                        <input type="text" v-model = "userInfo.user_pwd">
                    </td>
                </tr>
                <tr>
                    <th class=" text-right table-primary">이름</th>
                    <td class="text-center ">
                        <input type="text" v-model = "userInfo.user_name">
                        </td>
                </tr>
                <tr>
                    <th class=" text-right table-primary">성별</th>
                    <td class="text-center ">
                        <label><input type="radio" value="M" v-model ="userInfo.user_gender">남자
                        <input type="radio" value="F"  v-model ="userInfo.user_gender">여자</label>
                    </td>
                </tr>
                <tr>
                    <th class=" text-right table-primary">나이</th>
                    <td class="text-center ">
                        <input type="number" v-model = "userInfo.user_age">
                        </td>
                </tr>
                <tr>
                    <th class=" text-right table-primary">가입날짜</th>
                    <td class="text-center">
                        <input type="date" v-model = "userInfo.join_date"> 
                    </td>
                </tr>
            </table>
        </div>

        <div class = "row">
        <label><button  class="btn btn-success" @click="insertInfo">저장</button></label>
        </div>

    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
            userInfo:{ //컬럼명 그대로 써야함!! 바꿔쓰려면 통신하기전에 바꾸는 작업 해줘야
                user_id:'', //not null이라도 문자열은 공백으로 초기값 줄 수 있음
                user_pwd:'',
                user_name:null, //not null조건이 아닐때만 null로 초기값 줘도 됨
                user_gender:null,
                user_age:0,
                join_date: null //date값은 공백으로 초기값을 줄 수 없음
            }
        }
    },
    created(){
        this.userInfo.join_date = this.getToday();
    },
    methods : {

       async insertInfo(){

        if(!this.validation()) return;

            let data= {
                "param" : this.userInfo
            };
        // let result = await axios.post(`/api/tusers`, data)
        //                         .catch((err)=>console.log(err));
            let result = await axios(`/api/tusers`,{
                method : 'post',
                headers : {
               'content-Type' : 'application/json'
            },
            data : JSON.stringify(data)})
            .catch((err)=>console.log(err));

            console.log(result.data)
            if(result.data.insertId==0){
                alert(`회원가입이 정상적으로 되지 않았습니다.\n메세지 확인하세요.\n${result.data.message}`)
            }else{
                alert(`회원가입 되었습니다.!!!!!!!!\nNo.${result.data.insertId}`)
                this.$router.push('/');
            }
          
        },
        getToday(){
            let today = new Date();
            let year = today.getFullYear();
            let month = ('0' + (today.getMonth()+1)).slice(-2)
            let day = ('0' + today.getDate()).slice(-2)
            return year +'-' + month + '-' + day
        },
        validation(){
            if(this.userInfo.user_id == ''){
                alert ('아이디가 입력되지 않았습니다');
                return false;
            }
            // if(this.userInfo.user_id == existId ){
            //     alert('이미 존재하는 아이디입니다');
            // }
            if(this.userInfo.user_pwd == ''){
                alert ('비밀번호가 입력되지 않았습니다');
                return false;
            }
            return true;
        }
    }
}
</script>