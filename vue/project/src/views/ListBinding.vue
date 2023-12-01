<template>
    <div>
        <button v-on:click="addData"> + </button> <!--addData는 핸들러임-->
       
        <table border="1">
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody style="background-color: blanchedalmond;">
                <tr   v-bind:key="index" v-for="(product,index) in productList">
                    <td>{{ product.product_name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.delivery_price }}</td> 
                    <td><button v-on:click="delData(index)"> - </button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
let data = [
    {
        "product_name":"기계식키보드",
        "price":25000,
        "category":"노트북/태블릿",
        "delivery_price":5000
    },
    {
        "product_name":"무선마우스",
        "price":12000,
        "category":"노트북/태블릿",
        "delivery_price":5000
    },
    {
        "product_name":"아이패드",
        "price":725000,
        "category":"노트북/태블릿",
        "delivery_price":5000
    },
    {
        "product_name":"태블릿거치대",
        "price":32000,
        "category":"노트북/태블릿",
        "delivery_price":5000
    },
    {
        "product_name":"무선충전기",
        "price":42000,
        "category":"노트북/태블릿",
        "delivery_price":5000
    }

]

export default{
    data(){
        return{
            productList : data
        }
    },
    methods : {
        addData(){
          let obj =  {
            "product_name":"무선충전기",
            "price":42000,
            "category":"노트북/태블릿",
            "delivery_price":5000
            };
            let index =this.productList.length
            this.productList[index] = obj;
        },
        /*addData : function(){} */
        delData(index){
          this.productList.splice(index,1)
        } 
        // 추가 splice(3,0,{})
        // 수정 splice(3,1,{})
        // 삭제 splice(3,1)
    }
}

/* vue는 addEventListenr가 안됨

 <tag v-on:event="EventHandler"/>
 <tag @event="EventHandler"/>
 괄호를 쓸땐 이벤트객체 명시적으로 넘겨줘라
 매개변수를 넘겨서
 <tag @event="EventHandler(parameter)"/>
 하나의 이벤트에 여러개 이벤트 연결
 <tag @event="EventHandler1(),EventHandler2()"/> 
 이벤트객체가 필요한경우
 <tag @event="EventHaneler($event)*/
</script>
 