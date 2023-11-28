const fs = require('fs');
const express = require('express');
const userRouter = require('./user.js');
const app = express();
//기능을 위한것 use ,라우터랑 상관없음 그런데도 user가 조회되는 이유는?
app.use('/user', userRouter);//충돌나지 않도록 주의
app.use('/publlic', express.static('images'))
app.use(function(err, req, res, next){
    res.status(500).json({statusCode: res.statusCode, errMessage : err.message});
}); //굳이 하진 않아도 되지만 에러를 직접 지정해주고 싶을때 사용

app.get('/error', (req, res, next)=>{
    next(new Error('Process Fail! Check Data!'));
})
const jsonFile = fs.readFileSync('db.json');
const jsonData = JSON.parse(jsonFile);
const getData = (target, where)=>{
    let data = jsonData[target];
    //바깥쪽 어레이 쓰는 이유
    //자바스크립은 배열을 객체로 본다
    //isArray쓰는 이유
    if(Array.isArray(data)){
        let list = data;
        for(let obj of list){
            if(obj.id == where){
                data= obj;
            }
        }
    }
    return data;
}

app.get('/', (req, res)=>{
    res.send('Server Connect');

});
//브라우저 이용시 default값 get만 가능 조회만 가능하다!!!!
app.get('/posts', (req,res)=>{
    let data=getData('posts');
    res.send(data);
})    
app.get('/posts/:id',(req,res)=>{
    let data = getData('posts',req.params.id);
    res.json(data);
})

app.get('/comments',(req,res)=>{
    let data = getData('comments');
    res.send(data);
})
app.get('/comments/:id', (req,res)=>{
    let data = getData('comments',req.params.id);
    res.send(data)
})
app.get('/profile',(req, res)=>{
    let data = getData('profile');
    res.send(data);
})

app.listen(3000, ()=>{
    console.log('서버가 실행됩니다');
    console.log('http://localhost:3000');
});

//이방식을 매번 쓰진 말기 한경로에 대해 사용하는데 경로가 명확하지 않을수도 있다
//한경로에서 네가지를 무조건 한번에 쓸 필요는 없음 필요한것만 골라씀
app.route('/emps')
.get((req,res)=>{
    res.send('사원 전체조회')
})
.post((req,res)=>{
    res.send('사원등록')
})
.put((req, res)=>{
    res.send('사원수정')
})
.delete((req,res)=>{
    res.send('사원삭제')
})