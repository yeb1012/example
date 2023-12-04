<template>
    <div class ="container">
        <div class = "row">
            <table class = "table">
                <tr>
                    <th class=" text-right table-primary">NO.</th>
                    <td class="text-center ">{{ userInfo.user_no }}</td>
                </tr>
                <tr>
                    <th class=" text-right table-primary">ID</th>
                    <td class="text-center ">{{ userInfo.user_id }}</td>
                </tr>
                <tr>
                    <th class=" text-right table-primary">PassWord</th>
                    <td class="text-center ">{{ userInfo.user_pwd }}</td>
                </tr>
                <tr>
                    <th class=" text-right table-primary">이름</th>
                    <td class="text-center ">{{ userInfo.user_name }}</td>
                </tr>
                <tr>
                    <th class=" text-right table-primary">성별</th>
                    <td class="text-center ">{{ userGender }}</td>
                </tr>
                <tr>
                    <th class=" text-right table-primary">나이</th>
                    <td class="text-center ">{{ userInfo.user_age }}</td>
                </tr>
                <tr>
                    <th class=" text-right table-primary">가입날짜</th>
                    <td class="text-center ">{{ joinDate }}</td>
                </tr>
            </table>
        </div>

        <div class = "row">
        <label><button  class="btn btn-primary" @click="gotoInfo(userInfo.user_id)">수정</button>
        <router-link to="/"><button class="btn btn-warning">목록</button></router-link>
        <button class="btn btn-danger" @click="deleteInfo(userInfo.user_id)">삭제</button></label>
        </div>


    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
        searchNo : '',
        userInfo: {}
        }
    },
    computed :{
        userGender(){
            return this.userInfo.user_gender == 'M'? '남' : '여';
        },
        joinDate(){
            let date = new Date(this.userInfo.join_date);
            const year = date.getFullYear();
            const month = ('0'+(date.getMonth()+1)).slice(-2);
            const day = ('0'+date.getDate()).slice(-2);
            return year+'년'+month+'월'+day+'일';
        }
    },
    created(){
        this.searchNo = this.$route.query.userId;  //받아온건 route 넘겨줄땐 router
        this.getUserInfo();
    },
    methods : {
        async getUserInfo(){
            let result = await axios.get(`/api/tusers/${this.searchNo}`)
                                    .catch(err=>console.log(err));
        this.userInfo = result.data;                             
        },
       
        gotoInfo(id){
            this.$router.push({path:'/userUpdate', query :{userId : id} })
        },
        async deleteInfo(userId){
            let result = await axios.delete(`/api/tusers/${userId}`)
                                    .catch(err=>console.log(err));
        console.log(result.data)
        let count = result.data.affectedRows;  
        if(count ==0){
            alert ('정상적인 삭제 되지 않았음')

        }else{
            alert ('정상적인 삭제 되었음')
           // this.$router.push("/"); 패스 사용한경우
            this.$router.push({name : 'userList'}); //네임사용한경우
        }                     
        }
    }
    
}
</script>