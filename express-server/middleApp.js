const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();

//application/www-form-urlencoded ->기본적으로 사용하는 콘텐트타입
const defaultParser = express.urlencoded({extended : false});
//application/josn
const jsonParser = express.json();//parser가 하는 역할? multi-part 안됨

app.use(defaultParser);//경로상관없이 해당 서버가 가지고 있는 라우터 관련 모든것에 동일하게 적용되게함

app.post('/info', (req,res)=>{
    res.send('welcome, ' + req.body.name);
})

app.post('/message', jsonParser, (req,res)=>{
    res.send('MSG: ,'+ req.body.message);
})

app.listen(5000, ()=>{
    console.log('server Run')
})

let sessionSetting = session({
    secret : 'secret key',
    resave : false,//변경사항없어도 업데이트할건지 
    saveUninitialized : true, //저장소
    cookie : {
        httpOnly : true,
        secure : false,
        maxAge : 60000 //쿠키유효기간
    } //기본식별자 정도는 브라우저도 들고있음
});
app.use(sessionSetting);

//cors허용할때 잘 생각해봐야함, 보안이 강화되어야
const corsOptions = {
    //☆오리진마지막에 슬러시 들어가면 안된다!!!!
    origin : 'http://192.168.0.42:5500',
    optionsSucessStatus : 200 //이미 오래된 브라우저에서 인식할때 상태코드를 변경해서 인식할 수 있도록 설정하는것 ex) 인터넷 익스플로어
}

app.use(cors(corsOptions));
app.get('/', (req,res)=>{
   res.send(req.session);
})

app.post('/login', (req, res)=>{
    const {id, pwd} = req.body;
    req.session.user = id; //sessioin.id는 쓰면 꼬임 원래 session자체에 id가 있기 때문 그래서 session.user로 해준거임
    req.session.pwd = pwd;
    req.session.save(function(err){
        if(err) throw err;
        res.redirect('/');
    })
})

app.get('/logout', (req,res)=>{
    req.session.destroy();
    req.redirect('/');
})

