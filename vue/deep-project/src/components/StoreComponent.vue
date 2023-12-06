<template>
    <div>
        <form>
            <label> 제품번호 :<input type="text" v-model="productInfo.product_id"></label><br>
            <label> 제품명 :<input type="text" v-model="productInfo.product_name"></label><br>
            <label> 카테고리 :
                <input type="radio" value="A" v-model="productInfo.category">A
                <input type="radio" value="B" v-model="productInfo.category">B</label><br>
                <button type="button" @click="addCart">추가</button>
        </form>
        <hr>
        <table border="1">
            <thead>
                <caption>total:{{ total }}</caption>
                <tr>
                    <th>카테고리</th>
                    <th>제품번호</th>
                    <th>제품명</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="idx" v-for="(info, idx) in productList">
                <td>{{ info.category }}</td>
                <td>{{ info.product_id }}</td>
                <td>{{ info.product_name }}</td>
                <td><button type="button" @click="deleteP(index)"> x </button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

export default {
    data(){
        return{
            productInfo:{
                product_id:"",
                product_name:"",
                category:"A"
            }
        }
    },
    computed : {
        productList(){
            return this.$store.state.cart; //$store가 저장소를 불러오는거
        },
        total(){
            return this.$store.getters.cartCount;
        }    
    },
    methods :{
        addCart(){
            let obj ={
                product_id : this.productInfo.product_id,
                product_name : this.productInfo.product_name,
                category : this.productInfo.category
            }
            this.$store.dispatch('addProduct', obj); //이렇게 새 객체를 만들어야 추가시 값들이 연결안됨 //참조타입이 가지고 있는 것은 메모리 주소를 가지는 것이기 때문에 새 객체없이 넘기면 다같이 바뀐다구우우우
            //this.$store.commit('addProduct', obj) //이건 mutations를 불러오고 위에는 actions를 불러옴
        },
        deleteP(index){
            this.productList.splice(index,1);
            localStorage.removeItem(index);
        }
    },
}
</script>