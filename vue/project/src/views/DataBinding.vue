<template>
<div>
    <h1>{{title + ' !!!'}}</h1> <!--이중괄호 안은 자바스크립트영역이 된다 문자열과 문자열이 결합되는게 먼저 수행되고 결과가 디스플레이 그래서 가벼운 연산문법은 이방법 이용-->
    <h2 v-bind:name="'sample'" v-text="title" /> <!--v-bind일반 속성에 접근하는 바인드, 이 문법은 자바스크립트 문법사용 x, 쌍따옴표안에 따옴표 꼭 써줘야함 아니면 변수로 인식해서 호출함-->
    <p v-html="tagList"></p>
    <p v-text="tagList"></p>
    <hr>
    <input type="text" v-model="valueModel">
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
     <input type="radio" v-model="chradio">
     <p>{{chradio}}</p>

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
        city : '',
        chradio: ''
    }
 }
}//component가 가질 속성을 정의해주면 된다
</script>
