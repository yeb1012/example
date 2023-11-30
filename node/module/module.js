const{ add, minus } = require('./calculator'); //자바랑 노드에서 경로 설정 다름. 노드에선 같은레벨에서 불러올때 ./ , 상위폴더에서 불러올때 ../
//그냥 이름만 쓰면 외부에서 사용, 설치한 모듈을 불러오는거
//calculator에선언된 5개 중에 2개만 불러오겠다고 선언
//const cal= require('./calculator'); //이렇게 써도 되는데  위에 형식을 요즘은 더 많이씀 전체를 불러온다기보단 필요한 일부분만 불러옴

console.log(add(10,25));
console.log(minus(25,3));

//stream은 양방향 아님 쓰거나 읽거나만 가능한 단방향
//프로그램과 장치사이에 길이있다고 생각
