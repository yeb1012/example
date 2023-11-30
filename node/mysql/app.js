require('dotenv').config({path: './db/mysql.env'}); //얘는 메인에서 사용?
const express = require('express');
const app = express();
const mysql = require('./db.js');


app.use(express.json({
    limit : '50mb' 
}))

app.listen(3000, ()=>{
    console.log("server start");
})

app.get('/customers', async(req, res)=>{
    let list = await mysql.query('customerList');
    res.send(list);
});
app.get('/customers/:id', async(req, res)=>{
    let id = req.params.id
    let list = await mysql.query('customerSome',id);
    res.send(list);
});



app.get('/customers/:id', async(req, res)=>{
    let id = req.params.id
    let list = await mysql.query('customerInfo', id);
    res.send(list[0]); //배열로 주는 이유
});

app.post('/customers', async(req, res)=>{
    let data = req.body.param; //param은 안써도 되긴함
    let result = await mysql.query('customerInsert',data);
    res.send(result);
})

app.put('/customers/:id', async(req, res)=>{
    let datas =[req.body.param, req.params.id] //물음표마다 값이 필요하니까 물음표 두개이상일땐 하나의 배열을 사용, 객체 사용 안됨/  set절은 무조건 칼럼의 정보도 같이 들어가야함->객체타입을 요구
    let result = await mysql.query('customerUpdate', datas);
    res.send(result);
})

// app.put('/customers2/:id', async(req, res)=>{
//     let datas =[req.body.param, req.params.id] 
//     let result = await mysql.query('customerUpdateId', datas);
//     res.send(result);
// })

app.delete('/customers/:id', async(req, res)=>{
    let id  = req.params.id
    let result = await mysql.query('customerDelete', id);
    res.send(result);
})