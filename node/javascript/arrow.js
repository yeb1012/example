//함수선언식(외부라이브러리에서 사용가능) -var같은 느낌, 선언만되어있다면 언제 선언된것과 상관없이 어디서든 사용 가능 
//덮어쓰기 가능
function hello(name){
    return "Hello, " + name;
}
//화살표 함수
let arrHello = (name)=>{return "Hello, " + name;}
arrHello = name=> "Hello," + name; //실행되는게 return 한줄이라면

//함수표현식(요즘 더 많이사용) - 해당함수가 사용되기 전에 선언되어야만 사용이 가능
const message = function (msg){
    return "msg: " + msg;
}
//화살표 함수
let arrMessage = (msg) => {return "msg: " + msg;}
arrMessage = msg=> "msg: " + msg;
arrMessage =()=> {let today = new Date().getDay()
                    console.log("오늘날짜", today)}// 실행되는게 두줄 -> 괄호생략 안됨

//화살표함수는 this를 가질 수 없어서 기본인 window가 가져와짐
//함수내부에서 this를 사용하는 경우 화살표 함수는 사용불가
//그래서 addEventListener에선 this가 중요해서 화살표 함수 사용하지 않음
//this는 일반함수에서 함수 호출방식에따라 this에 바인딩 될 대상이 동적으로 결정

//함수선언식 덮어쓰는 예
//function hello(msg){
//    return "msg, Hello:" + msg;
//}//함수 표현식이라 덮어써지기 때문에 name이 아니라 변수가 msg로 바뀌어버림

console.log(hello("world"));



