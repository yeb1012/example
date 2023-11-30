const defaultNum = 1;

function add(num1, num2){
    return num1 + num2;
}

function minus(num1, num2){
    return num1 - num2;
}

function multi(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

module.exports={ //얘는 무조건 객체여야함 //내부함수 외부함수 구분할때도 사용
    defaultNum,
    add,
    minus,
    multi,
    divide
}//키 밸류 형식인 객체처럼 보이지 않음 -> divide : divide형태를 축약한것 (키와 밸류의 값이 동일할때 이 문법을 많이 씀)

//export default{

//}//모듈 형식은 아니고 차이점이라면 아래는 import로 받고 위에는 require로 받는다