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

app.get('/customerList', async(req, res)=>{
    let list = await mysql.query('customerList');
    res.send(list);
});

