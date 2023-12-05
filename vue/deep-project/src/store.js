//store.js

import {createStore} from 'vuex';

const store = createStore({
    state() {
        return{
            cart : [
                {
                    product_id : 1,
                    product_name : "아이폰거치대",
                    category : "A"
                }
            ],
            count : 0
        }
    },
    getters :{
        cartCount : (state)=>{
            return state.cart.length;
        }
    },//computed속성
    mutations : {
        increment(state){
            state.count ++;
    },
        addProduct(state, info){
            state.cart.push(info);
        }}//, 동기식으로 진행-> 실행되는 순간 state가 변경되기 전까지는 값을 못가져온다는 뜻
    // actions : {
    //     addProduct(state, info){    


    //     }
    // }//비동기로 처리 가능
});

export default store;