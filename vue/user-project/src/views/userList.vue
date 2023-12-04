<template>
    <div class="container">
        <table class="table">
            <caption> Total : {{ count }}</caption>
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
                <tr :key="idx" v-for="(user,idx) in userList"
                    @click = "goToUserInfo(user.user_id)" >
                    <td>{{ user.user_no }}</td>
                    <td>{{ user.user_id }}</td>
                    <td>{{ user.user_name }}</td>
                    <td>{{ user.user_gender }}</td>
                    <td>{{ dateFormat(user.join_date)}} </td>
                    <!-- <td>{{ dateFormat(user.join_date, 'yyyy년 MM월 dd일')  }} </td> -->
                </tr>
            </tbody>
        </table>
        <label><button  class="btn btn-primary" @click="insertUser">등록</button></label>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            userList : [] //''로 처리하지말자 초기값이 뭔지 확실하게 구별해 오브젝트인지 아닌지
        }
    },
    computed:{ //실제 계산결과 아니고 수정되면 안되는 자료들 매핑할때도 사용함
        count(){
            return this.userList.length; //원래는 이대로 잘 안쓰고 매핑하는 형태로 많이 씀
        }
    },
    created(){
        //컴포넌트가 처음부터 데이터를 들고 있어야해서 (mount가 되기도 전부터), 초기화할 데이터관련 진행
        this.getUserList(); //this가 붙어야함 범위가 달라짐
    },//페이지를 구성하는 컴포넌트는 페이지가 바뀔때마다 리로딩
    methods:{
        async getUserList(){
            let list = (await axios.get('/api/tusers') // /는 절대경로기 때문에 노드서버 외에는 통신안되는 상태, 외부 api 사용할땐 /를 사용하면 안됨
                                    .catch(err => {
                                        console.log(err);
                                    })).data; //axios 결과가 객체로 돌아옴 -> {(객체 data :{}, status : 200)}.data
             this.userList = list;                               
        },
        goToUserInfo(id){
            
            this.$router.push({path: '/userInfo', query :{userId : id} }); //특정 라우터를 등록하는건 패스 아니면 네임임 //파람즈와 쿼리 중 파람즈는 라우터에서 손을 쫌 봐야함
            //name : route로 등록할 때 사용한 name 속성
            //params : path 속성이 '/target/:id'일 때 {'id' : 100} 이런식으로 값을 넘겨야
        },
        dateFormat(value){
            //yyyy년 MM월 dd일로
            let date = new Date(value);
            const year = date.getFullYear();
            const month = ('0'+(date.getMonth()+1)).slice(-2);
            const day = ('0'+date.getDate()).slice(-2);
            return year+'년'+month+'월'+day+'일';

            //let result = format.replace('yyyy', year)
            //                   .replace('MM', month)
            //                    .replace('dd', day)
        },
        insertUser(){
            this.$router.push('/userInsert')
        }
    }
}
</script>