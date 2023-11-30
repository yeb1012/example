let obj ={
    id :100,
    name : 'Hong',
    birth : '1991-12-25'
}

let {name, id, age} = obj;  //키가 있으니 순서가 달라도 결과 가지고 옴
console.log(id, name, age); //age는 obj에 값이 없으니 언디파인

module.export={  //외부에서 특정 데이터만 불러올때 많이 씀
    object:{},
    method:function(){}
}

let {object, method} = module;

let array=['Hello', 'Nice', 'Monday'];
let [x,y]=array;
console.log(x,y);//배열은 인덱스 순서대로 부여되므로 순서 지켜야ㅏnice를 빼고 헬로우와 먼데이를 가지고 올 수 없다