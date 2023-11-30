const fs = require('fs');
const data = 'Hello,World!!';
fs.writeFileSync('./sample.txt', data, 'utf-8'); //비동기는 먼저 시작했다고 먼저 끝나는걸 보장하진 않는다
//fs.writeFile('./sample.txt', data, 'utf-8',(err)=>{
 //   if(err){
 //       throw err;
 //   }
 //   console.log('파일쓰기 완료!');
//});
fs.readFile('./sample.txt', 'utf-8', (err, data)=>{//utf-8로 쓸때와 읽어드릴때가 같아야한다
    if(err){
        throw err;
    }
    console.log(data);
});

