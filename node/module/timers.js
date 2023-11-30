const timeout = setTimeout(()=>{
 let today = new Date();
 let year = today.getFullYear();
 let month = ('0' + (today.getMonth()+1)).slice(-2);
 let day =  ('0' + today.getDay()).slice(-2);
 console.log(`${year}년 ${month}월${day}일`);
},1000);

let count = 0;
const interval = setInterval(()=>{
    console.log('interval %d', count++);
    if(count == 5){
        clearInterval(interval);
    }
},1000);

//똑같이 일초일때 먼저 적혀있는 timeout먼저 실행되고 인터벌이 먼저 실행(선입선출개념)
//둘을 바꿔 적으면 interval 1이 먼저 실행되고 timeout실행 그리고 나머지 interval이 순차진행


const immediate = setImmediate(()=>{
    console.log('즉시실행요청');
})//다른 콜백보다 우선순위 높아서 빨리 실행되는거 진짜 즉시실행이 아님 //밑에 마지막코드가 젤먼저 실행 그다음이 immediate

console.log('마지막코드'); 

