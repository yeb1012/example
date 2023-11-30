const fs = require('fs'); //이름만 쓰면 내장되어 있는것만 끄집어내려고 함 그래서 외부꺼 쓸땐 꼭 경로를
const {Console} = require('console');//꼭 대문자로 시작해야함

const output=fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new Console({ stdout : output, stderr : errorOutput }); //결과 출력 output error출력 errorOutput
const count = 5;
logger.log('count : %d', count); //파일에 log는 자동생성됨
logger.error('count : ' + count);






