
const process = require('process');
const os = require('os');
console.log(process.env); //출력해보면 객체 {key :value}

console.log(process.env.JAVA_HOME);//키값을 불러오면 해당값 출력

console.log(os);

console.log(os.cpus());// cpu코어 정보
console.log(os.tmpdir());//임시 저장경로 확인

