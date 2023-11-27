//sort
let names = ["Hong", 'Kang', "Adward", "Lee"];
names.sort(); //abc순서로 오름차순기준 
console.log(names);
names.reverse();//내림차순기준
console.log(names);

let nums=[40, 100, 1, 5, 25, 10];
nums.sort(); //유니코드순이라 1, 10,100,25,40,5순으로 배열됨 //sort가 문자열에 특화되어 있다는 뜻
console.log(nums);
nums.sort((a,b)=>{
    return a-b; //음수인 경우에 뒤에 숫자가 크다라고 인식
})
console.log(nums);


