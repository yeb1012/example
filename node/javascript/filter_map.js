//filter(원본배열은 나두고 특정한 조건을 만족하는 새배열을 만듬) //true or faulse 원본이 10개여도 필터 된 후 5개만 남을 수 있다는 거
let words = ['spray', 'limit', 'elite', 'exuberant', 'paresent'];
let result = words.filter(function(word, idx, arry){
    return word.length > 6;
})

console.log(result);

//map (배열의 길이가 줄어들지 않음) 배열 원본갯수 동일하게,  내용 구성이 변경된다 return되는 대상을 새로 만드는거
let users=[{id:100,
            name:'Hong'},
           {id:200,
            name:'Lee'},
           {id:300,
            name:'Kang'}]

 result = users.map(function(user){
    return {
        id: user.id,
        name: user.name,
        grade: user.id ==200?'VIP':'일반'
    }
 })           
 result2 = users.map(function(user){
        user.grade= user.id ==200?'VIP':'일반'
        return user;

 })    //얘는 원본데이터에도 grade가 들어가게 영향을 미침

 console.log(result);
 console.log(result2);