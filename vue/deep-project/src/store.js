//store.js

import {createStore} from 'vuex';
import createPersistedState from 'vuex-persistedstate'

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
    mutations : {       //state옵션만 접근
        increment(state){
            state.count ++;
    },
        addProduct(state, info){
            state.cart.push(info);
        }},// 동기식으로 진행-> 실행되는 순간 state가 변경되기 전까지는 값을 못가져온다는 뜻
    actions : {
        addProduct(context, info){      //context는 정의한 모든정보가 넘어옴   
            setTimeout(()=>{
                context.commit('addProduct',info)
            },1000);

        }
    },//비동기로 처리 가능
    plugins : [
        createPersistedState({
            paths : ['cart'] // state에 저장되는 변수 사용, 여기 저장 안하는 변수들은 새로고침하면 지워짐
        })
    ] //새로고침해도 정보가 안사라지게 해주는 추가기능 npm install --save vuex-persistendstate로 설치하고 import해서 사용
});

export default store;