<template>
    <div>
        <input type="number" v-model="price">원
        <br>
        <input type="number" v-model="count">개
        <p> 과세 금액 : {{ amount }}</p>
        <p> 부가세 10% : {{ tax }}</p>
        <p> 결제 금액 : {{ total }}</p>
    </div>
</template>
<script>

    const computed ={
    data(){
        return{
            price:0, //객체의 필드
            count:0
        }
    },
    computed : {
        amount (){
            return this.price * this.count;
        },//함수형태 함수를 내가 맘대로 수정할수 없음 readonly라고 생각하세요
        tax(){
            return this.amount * 0.1;
        },//computed에 정의된 amount를 사용하고 있네 단,추적해 들어갔을때 amount안에 위에 값을 하나이상은 쓰고 있어야 함
        total(){
            return this.amount + this.tax;
        }
    }
}
    const watch= {
        data(){
            return {
                price:0,
                count:0,
                amount:'',
                tax: '',
                total: ''

            }
        },
        watch:{ //watch는 리턴구문이 없음
            price(){
                this.amount = this.price * this.count;
            },
            count(){
                this.amount = this.price * this.count;
            },
            amount(){
                this.tax = this.amount * 0.1;
                this.total = this.amount + this.tax;
            }
        
        }
    }
    export default watch
    //export default computed
</script>
