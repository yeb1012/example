let nums =[50, 15, 39, 555, 6, 804];
let total = nums.reduce((sum, num)=>{
    return sum + num;
},1000); //1000이 초기값
console.log(total);