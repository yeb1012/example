const path = require('path');

console.log('==절대경로');
console.log(__filename); //파일이 존재하는 절대경로
console.log(__dirname); //폴더 절대경로
console.log(path.dirname(__filename));//얘랑 바로 위에껀 같은 값 가지고 올거임
console.log('실제 파일명 : %s', path.basename(__filename)); //앞부분 날리고 마지막 경로에 대한거
console.log('확장자:', path.extname(__filename) );//확장자에 대한 정보

let pathList = process.env.PATH.split(path.delimiter); //PATH 개별로 할때
console.log(path.delimiter,pathList);//delimiter는 실제경로와 상관 없는거임
console.log('');
console.log(path.sep, pathList[0].split(path.sep));//sep는 실제경로