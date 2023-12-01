<template>
<div>
    <h1>{{title + ' !!!'}}</h1> <!--이중괄호 안은 자바스크립트영역이 된다 문자열과 문자열이 결합되는게 먼저 수행되고 결과가 디스플레이 그래서 가벼운 연산문법은 이방법 이용-->
    <h2 v-bind:name="'sample'" v-text="title" /> <!--v-bind일반 속성에 접근하는 바인드, 이 문법은 자바스크립트 문법사용 x, 쌍따옴표안에 따옴표 꼭 써줘야함 아니면 변수로 인식해서 호출함-->
    <p v-html="tagList"></p>
    <p v-text="tagList"></p>
    <hr>
    <input type="text" v-model="valueModel"><!--v-model은 밸류값에 사용됨 우리가 맘대로 바꿀 수 x-->
    <p>{{typeof valueModel}}</p>
    <input type="number" v-model.lazy="numberModel"> <!-- .number해야 원래 타입을 숫자로 바꾸어 주지만 3버전이 되면서 v-model에 넘버타입을 값으로 넣어주면 자동으로 숫자로 인식하게 업그레이드 되었음-->
    <!--v-model .trim, .number, .lazy중 lazy만 흡수안되서 .lazy만 잘 써 주면 됨 lazy는 엔터를 치기 전에 값이 넘어가지 않는다!!-->
    <p>{{100000+numberModel}}</p>

    <select v-model="selectModel">
        <option value="spring">봄</option>
        <option value="summer">여름</option>
        <option value="fall">가을</option>
        <option value="winter">겨울</option>
    </select>
     <p>{{selectModel}}</p>

     <textarea v-model="textModel" />
     <hr>
     <input type="checkbox" v-model="chData" true-value="성공" false-value="실패">
     <p>{{chData}}</p>
    <div>
        <input type="checkbox" value="서울" v-model="city">
        <input type="checkbox" value="대구" v-model="city">
        <input type="checkbox" value="부산" v-model="city">
        <p>{{city}}</p>
    </div>
     <input type="radio" value="독서" v-model="chradio">
     <input type="radio" value="수영" v-model="chradio">
     <input type="radio" value="등산" v-model="chradio">
     <p>{{chradio}}</p>
     <hr>
     <img v-bind:style="styleData" v-bind:src="imgUrl"> <!--styleData는 오브젝트 형태--> <!--v-bind:style="[backSetting, addStyle]" 형식으로도 가능함-->
    <div class="container" v-bind:class="{'active': isActive, 'text-red':hasError}"> class Binding First<!--active는 불린타입 true,faluse 제어해서 적용되었다 안되었다 함--></div>
    <div class="container" v-bind:class="myClass">Class Binding First
    </div><!--두번째 경우가 흔하게 사용되지 않지만 이게 필요한 경우도 있다-->
</div>    
</template>
<script>
export default {
 data(){

    return {
        title : 'Hello, Vue.js',
        tagList : '<strong>Today is ...</strong>',
        valueModel : 'Korea',
        numberModel : 0,
        selectModel : 'winter',
        textModel : '곧 마친디이이이',
        chData : '',
        city : [], //체크박스 초기값은 배열로!!
        chradio: '수영',
        imgUrl:'https://src.hidoc.co.kr/image/lib/2022/5/12/1652337370806_0.jpg',
        styleData : {
            backgroundColor : 'skyblue',//하이픈 사용안함 여기서는, 기본권장이 카멜표기
            width : '300px',
            height : '300px'
        },
       // backSetting : 'background-color:skyblue; width:300px;',
      // addStyle : 'height:300px;'
      isActive:true,
      //hasError:!this.isActive,//!this.isActive가 false값이니까 글자색이 빨갛게 보임
      myClass:'active'
    }
 },
 computed : {
    hasError(){
        return !this.isActive;
    }//프로퍼티가 변경되면 같이 돈다 그래서 위에 데이타보다 여기가 좋다/ 초기값이 아니라 연결성이 더 중요하다면!!!!
 }
}//component가 가질 속성을 정의해주면 된다
</script>
<style scoped>
.container{
    width:100%;
    height: 200px;

}
.active{
    background-color: sandybrown;
    font-weight: bold;
}
.text-red{
    color: red
}
</style>
