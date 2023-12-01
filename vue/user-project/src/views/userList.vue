<template>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>No. </th>
                    <th>Id </th>
                    <th>이름 </th>
                    <th>성별</th>
                    <th>가입날짜</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="idx" v-for="(user,idx) in userList">
                    <td>{{ user.user_no }}</td>
                    <td>{{ user.user_id }}</td>
                    <td>{{ user.user_name }}</td>
                    <td>{{ user.user_gender }}</td>
                    <td>{{ user.join_date }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            userList : []
        }
    },
    computed:{
        count(){
            return this.userList.length;
        }
    },
    created(){
        //컴포넌트가 처음부터 데이터를 들고 있어야해서 (mount가 되기도 전부터), 초기화할 데이터관련 진행
        this.getUserList(); //this가 붙어야함 범위가 달라짐
    },
    methods:{
        async getUserList(){
            let list = (await axios.get('/tusers')
                                    .catch(err => {
                                        console.log(err);
                                    })).data; //axios 결과가 객체로 돌아옴 -> {(객체 data :{}, status : 200)}.data
             this.userList = list;                               
        }
    }
}
</script>