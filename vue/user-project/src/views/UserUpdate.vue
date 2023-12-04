<template>
    <div class ="container">
        <div class = "row">
            <table class = "table">
                <tr>
                    <th class=" text-right table-primary">NO.</th>
                    <td class="text-center ">
                        <input type="text" v-model = "userInfo.user_no" readonly/>
                    </td>
                </tr>
                <tr>
                    <th class=" text-right table-primary">ID</th>
                    <td class="text-center ">
                        <input type="text" v-model = "userInfo.user_id" readonly/>
                     
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
                        <input type="date" v-model = "userInfo.join_date" readonly> 
                    </td>
                </tr>
            </table>
        </div>

        <div class = "row">
        <label><button  class="btn btn-success" @click="updateInfo">저장</button></label>
        </div>

    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return {
            searchNo:'',
            userInfo:{ 
                // user_id : '', 
                // user_pwd:'',
                // user_name:null, 
                // user_gender:null,
                // user_age:0,
                // join_date: null
            }
    }
},
created(){
        this.searchNo = this.$route.query.userId; 
        this.getUserInfo();
    },
methods : {

    async getUserInfo(){
        if(!this.validation()) return;

            let result = await axios.get(`/api/tusers/${this.searchNo}`)
                                    .catch(err=>console.log(err));
        this.userInfo = result.data;
        let newDate = this.dateFormat(this.userInfo.join_date)
        this.userInfo.join_date = newDate;                             
        },
        dateFormat(value){
            //yyyy년 MM월 dd일로
            let date = new Date(value);
            const year = date.getFullYear();
            const month = ('0'+(date.getMonth()+1)).slice(-2);
            const day = ('0'+date.getDate()).slice(-2);
            return year+'-'+month+'-'+day;
        },
    async updateInfo(){
        let data = {
            "param" : this.userInfo
        };
        let result = await axios(`/api/tusers/${this.userInfo.user_id}`,{
            method : 'put',
            headers : {
                'content-Type' : 'application/json'
            },
            data : JSON.stringify(data)
        })
        .catch((err)=>console.log(err));

        if(result.data.changedRows ==0){
            alert('변경사항이 없습니다')
        }else{
            alert('수정 성공')
            this.$router.push('/')
        }
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