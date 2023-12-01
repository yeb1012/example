require('dotenv').config({path: './db/mysql.env'});
const express = require("express");
const mysql = require("./db.js");

const app = express();
app.listen(3000, ()=>{
    console.log("server start");
})

app.use(express.json({
    limit : '50mb'
}))

app.get('/tusers', async(req, res)=>{
    let list = await mysql.query('tUsersList');
    res.send(list)
})
app.get('/tusers/:id', async(req, res)=>{
    let id = req.params.id
    let list = await mysql.query('tUsersInfo',id);
    res.send(list[0])
})

app.post('/tusers', async(req,res)=>{
    let data = req.body.param;
    let list = await mysql.query('tUsersInsert', data)
    res.send(list)
})

app.put('/tusers/:id', async(req,res)=>{
    let datas=[req.body.param, req.params.id]
    let result =await mysql.query('tUsersUpdate', datas);
    res.send(result)
})

app.delete('/tusers/:id', async(req,res)=>{
    let id = req.params.id
    let result = await mysql.query('tUsersDelete', id);
    res.send(result)
})